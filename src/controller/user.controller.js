const express = require(`express`);
const { getAllUser, createUser } = require(`../service/user.service`);
const route = express.Router();

route.get(`/`, async (req, res) => {
    try {
        const data = await getAllUser()
        res.send(data);
    } catch (err) {
        res.send(err.message)
    }
})

route.post(`/`, async(req, res) =>{
    try {
        const data = await createUser()
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
})

module.exports = route;