import 'babel-polyfill';
import { createPersona } from '../exports/services/persona.service';
import { getOrCreatePersonaCategory } from '../exports/services/persona_category.service';

describe('Basic CRUD', () => {
  test('It should create a persona', async () => {
    const category = await getOrCreatePersonaCategory("stronglang_nonvisualcom");
    createPersona({ personaCategoryId: category[0].personaCategoryId })
      .then(personaObject => {
        persona = personaObject;
        expect(personaObject.personaId).toHaveLength(36);
      });
  });
})