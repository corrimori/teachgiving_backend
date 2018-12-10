const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const knex = require('knex')(config);

module.exports = knex;

// from knex.js file
// const environment = process.env.NODE_ENV || 'development';
// const knexConfig = require('./knexfile')[environment];
// const knex = require('knex')(knexConfig);
//
// module.exports = knex;
