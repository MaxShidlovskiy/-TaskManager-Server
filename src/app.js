const express = require(`express`);
const bodyParser = require(`body-parser`);

const user = require(`./controller/user.controller`);
const task = require(`./controller/task.controller`);

const cors = require(`cors`);
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(`/user`, user);
app.use(`/task`, task);

app.use((err, req, res, _next) => {
  res.send(err.message);
});

module.exports = app;