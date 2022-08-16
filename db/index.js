const mongoose = require("mongoose");
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
require("dotenv").config()
mongoose
  .connect(
    process.env.DB,
    options
  )
  .then(
    () => {
      console.log("DB Ready To INJECT");
    },
    (err) => {
      console.log(err);
    }
  );
