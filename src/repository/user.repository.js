const pool = require('../db');

async function getAllUserDB() {
  const client = await pool.connect();
  const sql = 'SELECT * FROM users';
  const result = (await client.query(sql)).rows;
  return result;
}

async function getUserByIdDB(id) {
  const client = await pool.connect();
  const sql = 'SELECT  * FROM users WHERE id =$1';
  const result = (await client.query(sql, [id])).rows;
  return result;
}

async function createUserDB(name, surname, email, pwd) {
  const client = await pool.connect();
  const sql = 'INSERT INTO users(name, surname, email, pwd) values ($1, $2, $3, $4) returning *';
  const result = (await client.query(sql, [name, surname, email, pwd])).rows;
  return result;
}

async function updateUserDB(id, name, surname, email, pwd) {
  const client = await pool.connect();
  const sql = 'UPDATE users SET  name = $1, surname = $2, email = $3, pwd = $4 WHERE id = $5 returning *';
  const result = (await client.query(sql, [name, surname, email, pwd, id])).rows;
  return result;
}

async function deleteUserDB(id) {
  const client = await pool.connect();
  const sql = 'DELETE from users where id = $1 returning *';
  const result = (await client.query(sql, [id])).rows;
  return result;
}

async function patchUserDB(id, clientData) {
  const client = await pool.connect();
  const sql1 = `SELECT * FROM users WHERE id = $1`;
  const result = (await client.query(sql1, [id])).rows;

  const newObj = { ...result[0], ...clientData };

  const sql2 = `UPDATE users SET name = $1, surname = $2, email =$3, pwd = $4 WHERE id =$5 returning *`;
  const result2 = (await client.query(sql2, [newObj.name, newObj.surname, newObj.email, newObj.pwd, newObj.id])).rows;
  return result2;
}

module.exports = { getAllUserDB, getUserByIdDB, createUserDB, updateUserDB, deleteUserDB, patchUserDB };