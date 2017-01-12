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

router.post('/', (req, res) => {
    var {
        task
    } = req.body
    task.length === 0 ?
    db.getTasks()
        .then(tasks => res.redirect('/')):
    db.newTask(task).then(() => res.redirect('/'))
})

router.post('/modify', (req, res) => {
    // 'delete' in req.body
    db.deleteTask(req.body.task)
    // 'complete' in req.body ?
    res.redirect('/')
  })


module.exports = router
