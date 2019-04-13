require('dotenv').config();

import Sequelize from 'sequelize';

const sequelize = new Sequelize(process.env.DB_DBS, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  timezone: 'Europe/Amsterdam',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

// sequelize.sync({ force: true })
sequelize.sync()
  .catch(err => {
    console.log(err);
  })

export {}