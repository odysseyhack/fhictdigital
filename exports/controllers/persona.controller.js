import limdu from 'limdu';
import data from '../data';
import { getPersona, createPersona, updatePersona, updateAllPersona } from '../services/persona.service';
import { getPersonaCategoryById, getOrCreatePersonaCategory } from '../services/persona_category.service';

var personaClassifier = new limdu.classifiers.Bayesian();

personaClassifier.trainBatch(data);

export const get = (req, res) => {
  getPersona(req.signedCookies.persona_tag)
    .then(persona => {
      getPersonaCategoryById(persona.personaCategoryId)
        .then(personaCategory => {
          res.status(200).send({ success: true, data: personaCategory.category_name });
        });
    })
    .catch(err => {
      console.log(err);
      res.status(200).send({ success: false, msg: "Persona could not be delivered" });
    });
}

export const create = async (req, res) => {
  const assignedCategory = await getOrCreatePersonaCategory(personaClassifier.classify(req.body));

  createPersona({ personaCategoryId: assignedCategory[0].personaCategoryId })
    .then(persona => {
      res.status(200).cookie('persona_tag', persona.personaId, { signed: true }).send({ success: true, msg: "Persona created, cookie set" });
    })
    .catch(err => {
      console.log(err);
      res.status(400).send({ success: false, msg: "Persona could not be created" });
    });
}

export const reassign = async (req, res) => {
  const assignedCategory = await getOrCreatePersonaCategory(personaClassifier.classify(req.body));

  updatePersona(req.signedCookies.persona_tag, assignedCategory[0].personaCategoryId)
    .then(() => {
      res.status(200).send({ success: true, msg: "Persona updated" });
    })
    .catch(err => {
      console.log(err);
      res.status(400).send({ success: false, msg: "Persona could not be updated" });
    });
}

export const updateAll = async (req, res) => {
  const assignedCategory = await getOrCreatePersonaCategory(req.body.category_name);

  updateAllPersona(assignedCategory[0].personaCategoryId)
    .then(() => {
      res.status(200).send({ success: true, msg: "Persona updated" });
    })
    .catch(err => {
      console.log(err);
      res.status(400).send({ success: false, msg: "Persona could not be updated" });
    });
}