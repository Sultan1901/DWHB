const express = require('express');
const {getPatientById,addPatient} = require('../controllers/patient')
const patientRouter = express.Router()
patientRouter.post('/addPatient', addPatient)
patientRouter.get("/getPatient/:mrn", getPatientById);
module.exports = patientRouter