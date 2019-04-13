import { getPersona, createPersona, updatePersona } from '../services/persona.service';
import { getPersonaCategoryById, getOrCreatePersonaCategory } from '../services/persona_category.service';

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
      res.status(404).send({ success: false, msg: "Persona could not be delivered" });
    });
}

export const create = async (req, res) => {
  const magiclyAssignedCategory = await getOrCreatePersonaCategory('advanced');

  createPersona({ personaCategoryId: magiclyAssignedCategory[0].personaCategoryId })
    .then(persona => {
      res.status(200).cookie('persona_tag', persona.personaId, {signed: true }).send({ success: true, msg: "Persona created, cookie set" });
    })
    .catch(err => {
      console.log(err);
      res.status(400).send({ success: false, msg: "Persona could not be created" });
    });
}

export const reassign = async (req, res) => {
  const magiclyAssignedCategory = await getOrCreatePersonaCategory('medium');

  updatePersona(req.signedCookies.persona_tag, magiclyAssignedCategory)
    .then(() => {
      res.status(200).send({ success: true, msg: "Persona updated" });
    })
    .catch(err => {
      console.log(err);
      res.status(400).send({ success: false, msg: "Persona could not be updated" });
    });
}