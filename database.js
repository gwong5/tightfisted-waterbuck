const fs = require('fs')

if( fs.existsSync('.env') ){
   require( 'dotenv' ).config()
}

const connectionString = process.env.DATABASE_URL
const pgp = require('pg-promise')()
const db = pgp(connectionString)

const getTasks = () => {}
  db.any("SELECT * FROM tasko ORDER BY id DESC")

const newTask = task =>
  db.oneOrNone("INSERT INTO tasko(task) VALUES ($1)");

// const deleteTask =>
//   DELETE FROM tasko WHERE id=

// const updateTask =>


module.exports = {getTasks, newTask}
