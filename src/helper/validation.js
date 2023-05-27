function isValidUserId(req, res, _next) {
  const { id } = req.params;
  if (isNaN(id)) throw new Error('id is not a number');
  if (id <= 0) throw new Error('id isnegative');
  _next();
}

function isValidTaskId(req, res, _next) {
  const { id } = req.params;
  if (isNaN(id)) throw new Error('id is not a number');
  if (id <= 0) throw new Error('id is negative');
  _next();
}

function isValidUserBody(req, res, _next) {
  const { name, surname, email, pwd } = req.body;
  if (!name) throw new Error('you are not gave a name');
  if (!surname) throw new Error('you are not gave a surname');
  if (!email) throw new Error('you are not gave a email');
  if (!pwd) throw new Error('you are not gave a pwd');

  if (!isNaN(name)) throw new Error('name is a number');
  if (!isNaN(surname)) throw new Error('surname is a number');
  if (pwd.length < 8) throw new Error('pwd is too short');
  if(!/^[a-z0-9_\-.]+@[a-z]+\.[a-z]+$/gm.test(email))throw new Error('email is invalid');
  _next();
}

function isValidTaskBody(req, res, _next) {
  const { task, user_id } = req.body;
  if (!task) throw new Error('task is empty');

  if (!isNaN(task)) throw new Error('task is a number');
  if (isNaN(user_id)) throw new Error('user_id is string');
  if (user_id < 0) throw new Error('user id is negative');

  _next();
}

module.exports = { isValidUserId, isValidUserBody, isValidTaskId, isValidTaskBody };