import Boom from '@hapi/boom'
//Wrap the error to provide all the details if not in production env
function formatError({ message, ...err }, stack, data = {}) {
  const error = { ...err, error: message, statusError: err.error }
  const isProduction = process.env.NODE_ENV === `production`
  const isJoiError = data?.isJoi ?? false
  if (isJoiError) {
    const failedParams = data?.details ?? []
    error.message = `${message}. ${failedParams
      .map((failedParam) => failedParam.message)
      .join(`.`)}`
    if (!isProduction) {
      error.failedParams = failedParams
    }
  }
  return isProduction ? error : { ...error, stack }
}
//If it wasn't created with boom (as an unexpected or jwt error)
//wrap with boom badImplementation or Unathorized
function wrapErrors(err, req, res, next) {
  if (process.env.LOG_FULL_ERRORS) {
    // eslint-disable-next-line no-console
    console.log(err)
  }
  if (err.name === `UnauthorizedError`) {
    return next(Boom.unauthorized(`No se encontró token de autenticación`))
  }
  if (!err.isBoom) {
    return next(Boom.badImplementation(err))
  }

  return next(err)
}
function errorHandler(err, req, res, next) {
  const {
    output: { statusCode, payload },
  } = err

  res
    .status(statusCode)
    .json({ success: false, ...formatError(payload, err.stack, err.data) })
}

export { wrapErrors, errorHandler }
