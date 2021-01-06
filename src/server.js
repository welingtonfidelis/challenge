require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');

const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log(`🚀 Server running in ${port}\n`);
});

module.exports = app;