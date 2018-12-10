// var express = require('express')
// var router = express.Router()
// const knex = require('../knex')
//
// // LIST all charities
// router.get('/', (req, res, next) => {
//     knex('charities')
//     .then((data) => {
//       console.log('data', data)
//       res.send(data)
//     })
//   })
//
// // USE KNEX to GET a specific charities
// router.get('/:charitiesid', (req, res, next) => {
//   knex('charities')
//   .where('id', req.params.charitiesid)
//   .then((charity) => {
//     let newCharityArray = charity.map((charity) => {
//       delete charity.created_at
//       delete charity.updated_at
//       console.log('charity>>', charity);
//       return charity;
//     })
//     console.log('the specific charities>>', newCharityArray)
//     res.send(newCharityArray)
//   })
// })
//
// module.exports = router;
//
//
//
// // Breaking here =================================
// //     res.status(200).send(newCharitiesArr); // 200 = ok
// //   })
// //   .catch((err) => {
// //     console.log('err', err);
// //     res.status(500).send({error: {message: 'Something went wrong!'}})
// //   })
// // });
