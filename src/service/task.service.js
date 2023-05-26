const { getAllTaskDB, getByIdTaskDB, createTaskDB, updateTaskDB, deleteTaskDB, patchTaskDB } = require('../repository/task.repository');

async function getAllTask() {
    const data = await getAllTaskDB();
    return data;
}

async function getByIdTask(id) {
    const data = await getByIdTaskDB(id);
    return data;
}

async function createTask(task, user_id) {
    const data = await createTaskDB(task, user_id);
    return data;
}

async function updateTask(id, task, user_id) {
    const data = await updateTaskDB(id, task, user_id);
    return data;
}

async function deleteTask(id) {
    const data = await deleteTaskDB(id);
    return data;
}

async function patchTask(id, clientData) {
    const data = await patchTaskDB(id, clientData);
    return data;
}

module.exports = { getAllTask, getByIdTask, createTask, updateTask, deleteTask, patchTask };