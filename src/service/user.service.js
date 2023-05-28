const { getAllUserDB, getUserByIdDB, createUserDB, updateUserDB, deleteUserDB} = require('../repository/user.repository');

async function getAllUser() {
  const data = await getAllUserDB();
  return data;
}

async function getUserById(id) {
  const data = await getUserByIdDB(id);
  return data;
}

async function createUser(name, surname, email, pwd) {
  const data = await createUserDB(name, surname, email, pwd);
  return data;
}
async function updateUser(id, name, surname, email, pwd) {
  const data = await updateUserDB(id, name, surname, email, pwd);
  return data;
}

async function deleteUser(id) {
  const data = await deleteUserDB(id);
  return data;
}

module.exports = { getAllUser, getUserById, createUser, updateUser, deleteUser};