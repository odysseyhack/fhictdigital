import Joi from 'joi';

const personaId = Joi.string().min(36).max(36).required();

const personaData = Joi.object().keys({
  age: Joi.number(),
  gender: Joi.string().allow('male', 'female'),
  income: Joi.number(),
  sector: Joi.string(),
  residence: Joi.string(),
  nationality: Joi.string()
});

export const cookieIdValidator = (req, res, next) => {
  if (!req.signedCookies.persona_tag) {
    res.status(200).send({ success: false, msg: 'No cookie present' });
  } else {
    personaId.validate(req.signedCookies.persona_tag, { abortEarly: false })
      .then(() => {
        next();
      })
      .catch(validationError => {
        res.status(200).send({ success: false, msg: `Invalid request: ${validationError.details.map(d => d.message)}` });
      });
  }
}

export const personaDataValidator = (req, res, next) => {
  personaData.validate(req.body, { abortEarly: false })
    .then(() => {
      next();
    })
    .catch(validationError => {
      res.status(400).send({ success: false, msg: `Invalid request: ${validationError.details.map(d => d.message)}` });
    });
}