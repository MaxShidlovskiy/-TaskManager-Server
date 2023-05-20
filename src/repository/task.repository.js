const pool = require(`../db`);

async function getAllTaskDB() {
    const client = await pool.connect();
    const sql = 'SELECT * FROM tasks';
    const res = (await client.query(sql)).rows;
    return res;
}

async function createTaskDB() {
    const client = await pool.connect();
    const sql = 'INSERT INTO users(task,user_id) values ($1, $2) returning *';
    const result = (await client.query(sql, [task, user_id])).rows;
    return result;
}


module.exports = { getAllTaskDB, createTaskDB }