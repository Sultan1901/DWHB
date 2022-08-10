const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("./db")
app.use(express());
app.use(cors());
app.use(morgan());
app.use(express.json());
const patientRouter = require('./routes/router/patient')
app.use(patientRouter)
const PORT = 5000;
app.listen(PORT, () => {
  console.log("OK");
});
