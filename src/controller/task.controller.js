const express = require('express');

const { buildResponse } = require('../helper/buildResponse');
const { getAllTask, getByIdTask, createTask, updateTask, deleteTask, patchTask } = require('../service/task.service')
const { isValidTaskId, isValidTaskBody } = require('../helper/validation');

const route = express.Router();

route.get('/', async (req, res) => {
  try {
    const data = await getAllTask();
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.get('/:id', isValidTaskId, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getByIdTask(id);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.post('/', isValidTaskBody, async (req, res) => {
  try {
    const { task, user_id } = req.body;
    const data = await createTask(task, user_id);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.put('/:id', isValidTaskId,isValidTaskBody, async (req, res) => {
  try {
    const { id } = req.params;
    const { task, user_id } = req.body;
    const data = await updateTask(id, task, user_id);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.delete('/:id', isValidTaskId, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deleteTask(id);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.patch('/:id', isValidTaskId, async (req, res) => {
  try {
    const { id } = req.params;
    const clientData = req.body;
    const data = await patchTask(id, clientData);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

module.exports = route;