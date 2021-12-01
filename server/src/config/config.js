require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  DB_LINK: process.env.DB_LINK,
  SECRET_KEY: process.env.SECRET_KEY,
};
