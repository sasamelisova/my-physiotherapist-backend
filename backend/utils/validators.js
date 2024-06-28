const Joi = require('joi');

const addTherapySessionSchema = Joi.object({
  date: Joi.string().isoDate().required(),
  exercises: Joi.array().items(
    Joi.object({
      name: Joi.string().min(1).required(),
      description: Joi.string().min(1).required()
    })
  ).required()
});

const getTherapySessionSchema = Joi.object({
  username: Joi.string().min(3).max(30).required()
});

exports.validateAddTherapySession = (data) => addTherapySessionSchema.validate(data);
exports.validateGetTherapySession = (data) => getTherapySessionSchema.validate(data);
