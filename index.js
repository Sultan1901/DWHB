const express = require("express");
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
dotenv.config()
require("./db")
app.use(express());
app.use(cors());
app.use(morgan());
app.use(express.json());
const patientRouter = require('./routers/routes/patient')
app.use(patientRouter)
const PORT = process.env.PORT || 5001
app.listen(PORT, () => {
  console.log("OK");
});
