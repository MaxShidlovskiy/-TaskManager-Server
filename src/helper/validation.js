function isValidUserId(req, res, _next) {
  const { id } = req.params;
  if (isNaN(id)) throw new Error('id is not a number');
  if (id <= 0) throw new Error('id is <0');
  _next();
}

function isValidTaskId(req, res, _next) {
  const { id } = req.params;
  if (isNaN(id)) throw new Error('id is not a number');
  if (id <= 0) throw new Error('id is negative');
  _next();
}

function isValidUserBody(req, res, _next) {
  const { task, user_id } = req.body;
  if (!task) throw new Error('empty values');
  if (!isNaN(task)) throw new Error('invalid value');
  if (isNaN(user_id)) throw new Error('invalid value');
  if (user_id <= 0) throw new Error('user_id is negative');
  _next();
}

function isValidTaskBody(req, res, _next) {
  const { task, user_id } = req.body;
  if (!task) throw new Error('empty values');
  if (!isNaN(task)) throw new Error('invalid value');
  if (isNaN(user_id)) throw new Error('invalid value');
  if (user_id <= 0) throw new Error('user_id is negative');
  _next();
}

module.exports = { isValidUserId, isValidUserBody, isValidTaskId, isValidTaskBody };