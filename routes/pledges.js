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

// GET one pledge
router.get('/:pledgeid', (req, res, next) => {
  // USE KNEX to GET a specific pledge
  knex('pledges')
  .where('id', req.params.pledgeid)
  .then((pledge) => {
    let newPledgesArray = pledge.map((pledge) => {
      console.log('pledge>>', pledge);
      return pledge;
    })
    console.log('the pledge array>>', newPledgesArray)
    res.send(newPledgesArray)
  })
})

// CREATE one pledge
router.post('/', (req, res, next) => {
  res.send('pledges')
  // Look for some provided Body data
  console.log('req.body', req.body)
  console.log('req.params.pledgeAmt', req.params.pledgeAmt)


  // create new user in DB with KNEX
  // SQL INSERT
  // knex('users')
  // .insert({name: req.body.name})
  // .returning('*')
  // .then((result) => {
  //   let insertedRecord = result[0]
  //   console.log('data', insertedRecord)
  //   // conclude the route with res.send
  //   res.send(insertedRecord)
  // })

})

module.exports = router;
