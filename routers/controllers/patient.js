const patientModel = require("../../db/models/patient");

const addPatient = (req, res) => {
  const {age, name, mrn, diagnosis, gender, bmi, kcal, ibw, protein, fluid, adw } =
    req.body;
  const newpatient = new patientModel({
    name,
    age,
    mrn,
    diagnosis,
    gender,
    bmi,
    kcal,
    ibw,
    protein,
    fluid,
    adw,
  });
  newpatient
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const getPatientById = (req, res) => {
  const { mrn } = req.params;
  patientModel
    .find({mrn}).populate("mrn")
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
module.exports = {
  addPatient,
  getPatientById,
};
