import { Persona } from '../../sequalize';

export const getPersona = (personaId) => {
  return Persona.findByPk(personaId);
}

export const createPersona = (persona) => {
  return Persona.create(persona);
}