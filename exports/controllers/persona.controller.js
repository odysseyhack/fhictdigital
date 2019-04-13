import PersonaService from '../services/persona.service';

export const get = (req, res) => {
    PersonaService.getPersona(req.personaId)
      .then(persona => {
        res.status(200).send({ success: true, data: persona });
      })
      .catch(err => {
        console.log(err);
        res.status(400).send({ success: false, msg: "Persona could not be delivered" });
      });
}