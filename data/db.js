require("dotenv").config();
const mongoose = require("mongoose");

module.exports = connect;

const connect = (url = process.env.DB_URL, opts = {}) => {
  return mongoose.connect(url, {
    ...opts,
    useNewUrlParser: true,
    useCreateIndex: true
  });
};
