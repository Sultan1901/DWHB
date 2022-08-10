const mongoose = require("mongoose");
const patient = new mongoose.Schema({
  time: { type: Date, default: new Date() },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  mrn: { type: Number, required: true },
  diagnosis: { type: String, required: true },
  gender: { type: String, required: true },
  bmi: { type: Number, required: true },
  kcal: [{ type: Number, required: true }],
  ibw: { type: Number, required: true },
  protein: [{ type: Number, required: true }],
  fluid: { type: Number, required: true },
  adw: { type: Number, required: true },
});
module.exports = mongoose.model("Patient", patient)
