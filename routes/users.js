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

// USE KNEX to GET a specific user
router.get('/:userid', (req, res, next) => {
  knex('users')
  .where('id', req.params.userid)
  // user is data
  .then((user) => {
    let newUserArray = user.map((user) => {
      delete user.created_at
      delete user.updated_at
      console.log('user>>', user);
      return user;
    })
    console.log('the specific user>>', newUserArray)
    res.send(newUserArray)
  })
})

module.exports = router;
