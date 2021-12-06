import Joi from '@hapi/joi'

const proccessText = Joi.object().keys({
  query: Joi.object().keys({
    text: Joi.string().required(),
  }),
})

const schemas = {
  proccessText,
}

export default schemas
