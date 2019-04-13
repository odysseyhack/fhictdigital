import { getPersona } from '../services/persona.service';
import { getPersonaCategoryById } from '../services/persona_category.service';

export const get = (req, res) => {
  getPersona(req.params.personaId)
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