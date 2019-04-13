require('dotenv').config();
import Sequelize from 'sequelize';

import PersonaModel from './exports/models/persona.model';
import PersonaCategoryModel from './exports/models/persona_category.model';

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: true
  }
});

const Persona = PersonaModel(sequelize, Sequelize);
const PersonaCategory = PersonaCategoryModel(sequelize, Sequelize);

Persona.belongsTo(PersonaCategory, { foreignKey: 'personaCategoryId' });

sequelize.sync()
  .catch(err => { console.log(err); });

export {
  Persona,
  PersonaCategory
}