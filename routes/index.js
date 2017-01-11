const express = require('express')
const router = express.Router()
const db = require('../database')

/* GET home page. */
router.get('/', function(req, res, next) {
    db.getTasks()
        .then(tasks => {
            res.render('index', {
                title: 'Todos',
                tasks
            })
        })
})



module.exports = router
