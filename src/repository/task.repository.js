const pool = require(`../db`);

async function getAllTaskDB() {
    const client = await pool.connect();
    const sql = 'SELECT * FROM tasks';
    const res = (await client.query(sql)).rows;
    return res;
}

async function createTaskDB(name, surname, email, pwd) {
    const client = await pool.connect();
    const sql = 'INSERT INTO users(name, surname, email, pwd) values ($1, $2, $3, $4) returning *';
    const result = (await client.query(sql, [name, surname, email, pwd])).rows;
    return result;
}


module.exports = { getAllTaskDB, createTaskDB }