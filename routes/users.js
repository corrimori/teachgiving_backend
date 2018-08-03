var express = require('express');
var router = express.Router();
const knex = require('../knex');


// LIST all users
router.get('/', (req, res, next) => {
    // USE KNEX to GET all users
    knex('users')
    .then((data) => {
      console.log('data', data)
      res.send(data)
    })
  })

  // READ one user
  router.get('/:userid', (req, res, next) => {
    // USE KNEX to GET a specific user
    knex('users')
    .where('id', req.params.userid)
    .then((data)) => {
      console.lgo('the specific user'. data)
      res/send(data)
    }
  })

module.exports = router;
