const mongoose = require("mongoose");
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(
    `mongodb+srv://r0x:012774Ss@cluster0.cxdsd.mongodb.net/?retryWrites=true&w=majority`,
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
