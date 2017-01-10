const express = require('express')
const router = express.Router()
const db = require('../database')

/* GET home page. */
router.get('/', function(req, res, next) {
  db.getTasks()
    .then(tasko => {
      res.render('index', {
        task
      })
    })
})

module.exports = router
