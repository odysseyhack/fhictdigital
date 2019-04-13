import Joi from 'joi';

const personaIdSchema = Joi.object().keys({
  adminId: Joi.string().min(36).max(36).required()
});

export const idValidator = (req, res, next) => {
  personaIdSchema.validate(req.params, {abortEarly: false})
    .then(() => {
      next();
    })
    .catch(validationError => {
      res.status(400).send({ success: false, msg: `Invalid request: ${validationError.details.map(d => d.message)}` });
    });
}