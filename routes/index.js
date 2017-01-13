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
    if (task.length === 0) {
    db.getTasks()
        .then(tasks => res.redirect('/'))
    } else {
    db.newTask(task).then(() => res.redirect('/'))
  }
})

router.post('/modify', (req, res) => {
    if ('delete' in req.body) {
    db.deleteTask(req.body.task)
  } else if ('complete' in req.body) {
    db.completeTask(req.body.task)
  } else if ('edit' in request.body) {
    db.editTask(req.body.task)
  }
  res.redirect('/')
  })


module.exports = router
