const express = require(`express`);
const { getAllTask, createTask } = require(`../service/task.service`)
const route = express.Router();

route.get('/', async (req, res) => {
    try {
        const data = await getAllTask();
        res.send(data)
    } catch (error) {
        res.send(error.message);
    }
});

route.post('/', async (req, res) => {
    try {
        const { task, user_id } = req.body;
        const data = await createTask(task, user_id);
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
});

module.exports = route