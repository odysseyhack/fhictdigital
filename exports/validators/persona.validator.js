import Joi from 'joi';

const personaId = Joi.string().min(36).max(36).required();

export const cookieIdValidator = (req, res, next) => {
  if (!req.signedCookies.persona_tag)
    res.status(400).send({ success: false, msg: 'No cookie present' });
  
  personaId.validate(req.signedCookies.persona_tag, {abortEarly: false})
    .then(() => {
      next();
    })
    .catch(validationError => {
      res.status(400).send({ success: false, msg: `Invalid request: ${validationError.details.map(d => d.message)}` });
    });
}