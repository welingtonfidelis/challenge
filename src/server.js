require('dotenv').config();

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3001;
const Console = console;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  Console.log(`🚀 Server running in ${port}\n`);
});

module.exports = app;
