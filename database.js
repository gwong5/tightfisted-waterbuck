const fs = require('fs')

if( fs.existsSync('.env') ){
   require( 'dotenv' ).config()
}

const connectionString = process.env.DATABASE_URL
const pgp = require('pg-promise')()
const db = pgp(connectionString)

const getTasks = () =>
  db.any("SELECT * FROM tasko ORDER BY id ASC")

const newTask = task =>
  db.none("INSERT INTO tasko (task) VALUES ($1)", [task]);

const deleteTask = id =>
 db.none("DELETE FROM tasko WHERE id in ($1:csv)", [id]);

const completeTask = id =>
  db.none("UPDATE tasko SET complete=TRUE WHERE id IN ($1:csv)", [id]);

// const updateTask = task =>
//   db.oneOrNone(" ")


module.exports = {getTasks, newTask, deleteTask, completeTask};
