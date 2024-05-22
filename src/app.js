const express = require("express");
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_, response) => { response.json({ message: "Welcome to Alta Booking app" }); });

app.use('/api/v1/transfer/', require('./modules/transfer/transfer.route'))

module.exports = app;