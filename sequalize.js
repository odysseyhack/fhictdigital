require('dotenv').config();
import Sequelize from 'sequelize';

import PersonaModel from './exports/models/persona.model';
import PersonaCategoryModel from './exports/models/persona_category.model';

const sequelize = new Sequelize(process.env.DB_DBS, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  timezone: 'Europe/Amsterdam',
  pool: { max: 10, min: 0, acquire: 30000, idle: 10000 }
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