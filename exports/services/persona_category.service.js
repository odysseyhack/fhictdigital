import { PersonaCategory } from '../../sequalize';

export const getPersonaCategoryById = (personaCategoryId) => {
  return PersonaCategory.findByPk(personaCategoryId);
}

export const getOrCreatePersonaCategory = (name) => {
  return PersonaCategory.findOrCreate({ where: { category_name: name }});
}