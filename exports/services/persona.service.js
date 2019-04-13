import { Persona } from '../../sequalize';

export const getPersona = (personaId) => {
  return Persona.findByPk(personaId);
}