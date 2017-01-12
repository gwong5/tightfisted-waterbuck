const express = require('express')
const router = express.Router()
const db = require('../database')

/* GET home page. */
router.get('/', (req, res, next) => {
    db.getTasks()
        .then(tasks => {
            res.render('index', {
                title: 'Todos',
                tasks
            })
        })
})

router.post('/todos', (req, res) => {
    var {
        task
    } = req.body
    db.newTask(task).then(() => res.redirect('/'))
})

module.exports = router
