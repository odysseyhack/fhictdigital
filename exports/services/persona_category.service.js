import { PersonaCategory } from '../../sequalize';

export const getPersonaCategoryById = (personaCategoryId) => {
  return PersonaCategory.findByPk(personaCategoryId);
}