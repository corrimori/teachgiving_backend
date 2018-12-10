// var express = require('express');
// var router = express.Router();
// const knex = require('../knex');
//
//
// // LIST all pledges
// router.get('/', (req, res, next) => {
//     // USE KNEX to GET all pledges
//     knex('pledges')
//     .then((data) => {
//       console.log('data', data)
//       res.send(data)
//     })
//   })
//
// // GET one pledge
// router.get('/:pledgeid', (req, res, next) => {
//   // USE KNEX to GET a specific pledge
//   knex('pledges')
//   .where('id', req.params.pledgeid)
//   .then((pledge) => {
//     let newPledgesArray = pledge.map((pledge) => {
//       console.log('pledge>>', pledge);
//       return pledge;
//     })
//     console.log('the pledge array>>', newPledgesArray)
//     res.send(newPledgesArray)
//   })
// })
//
//
// //===============================================+========
//   // {id: 4, kids_id: 1, charities_id: 4, pledgeAmount: 0.25, numOfWeeks: 2},
//
// //create a join for kids_id & pledges
// // knex('pledges')
// // .join('kids_id', 'kids.id', '=', 'contacts.kids_id')
// // .select('pledges.id', 'contacts.phone')
// //===============================================+========
//
//
// //create one new pledge
// router.post('/', (req, res, next) => {
//   console.log('REQ.BODY>>>', req.body);
//   console.log("Charities id ", req.body.charities_id)
//   // create a new pledge
//   knex('pledges')
//   .insert({ kids_id: req.body.kids_id,
//       charities_id: req.body.charities_id,
//       pledgeAmount: req.body.pledgeAmount,
//       numOfWeeks: req.body.numOfWeeks })
//   .returning('*')
//   .then((result) => {
//     console.log(result)
//     res.statusCode = 200;
//     let insertedRecord = result[0]
//     console.log('data', insertedRecord)
//     res.send(insertedRecord)
//   })
//   // add catch(err) here
// })
//
//
// module.exports = router;
