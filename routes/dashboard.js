let express = require('express')
let router = express.Router()
const knex = require('../knex')

router.get('/:kids'), (req, res, next) => {
  knex('kids')
  where('id', req.params.userid)
  .then((kids)) => {
    let newKidsArray = kids.map((kids) => {
      return kids
    })
    console.log('In kids get route')
    res.send(data)
  })
})
