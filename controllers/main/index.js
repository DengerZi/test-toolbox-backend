import Boom from '@hapi/boom'
import { successResponse } from 'utils'

export function processText(req, res, next) {
  try {
    const { text } = req.query

    if (!text || !text.length) throw Boom.badRequest(`Not have text`)

    const response = {
      value: text.split(``).reverse().join(``),
      palindrome:
        text.toLowerCase().replace(/\s/g, ``) ===
        text.toLowerCase().split(``).reverse().join(``).replace(/\s/g, ``),
    }

    return successResponse(res, response)
  } catch (error) {
    return next(error)
  }
}
