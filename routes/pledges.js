var express = require('express');
var router = express.Router();
const knex = require('../knex');


// LIST all pledges
router.get('/', (req, res, next) => {
    // USE KNEX to GET all pledges
    knex('pledges')
    .then((data) => {
      console.log('data', data)
      res.send(data)
    })
  })

// READ one pledge
router.get('/:pledgeid', (req, res, next) => {
//   // USE KNEX to GET a specific user
  knex('kids')
  .where('id', req.params.kidid)
  .then((data)) => {
    console.log('the specific user', data)
    res/send(data)
  }
})

  // READ image (avatar)
  // router.get('/:avatarid', (req, res, next) => {
  //   // USE KNEX to GET a specific user
  //   knex('avatar')
  //   .where('id', req.params.userid)
  //   .then((data)) => {
  //     console.log('the specific user', data)
  //     res/send(data)
  //   }
  // })

module.exports = router;
