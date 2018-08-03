'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/giving_dev'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/giving_test'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
