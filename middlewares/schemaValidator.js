import Boom from '@hapi/boom'
import Joi from '@hapi/joi'
//Higher order function to receive schema to validate and returns the midleware
export function schemaValidator(schemaGetter) {
  return function validate(req, res, next) {
    const { params, query, body } = req
    const schema =
      typeof schemaGetter == `function` ? schemaGetter(req) : schemaGetter
    //If and schema wasnt provided or was an invalid schema continue
    if (!schema || !Joi.isSchema(schema)) {
      return next()
    }
    //stripUnknown:true removed all the properties that werent declared in the schema
    //abortEarly allows the middleware to return ALL validation errors and not only the 1st
    const { error, value } = schema.validate(
      { params, query, body },
      { allowUnknown: true, dateFormat: `date`, abortEarly: false },
    )
    if (error) {
      throw Boom.badRequest(`Parametros no validos`, error)
    }
    //reasign the validated and formatted (if necessary) fields to the request
    req.body = value.body
    req.params = value.params
    req.query = value.query
    return next()
  }
}
