const mongoose = require("mongoose");

console.log(process.env.DATABASE_URL);

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("moongo connection open");
  })
  .catch((err) => {
    console.log("mongo connection error");
    console.log(err);
  });
