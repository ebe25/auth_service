const bcrypt = require("bcrypt");
require("dotenv").config();
const saltRounds = process.env.SALTROUNDS || 10;

const hashPassword =  (textPassword) => {
  const password =  bcrypt.hashSync(textPassword, saltRounds);
  return password;
};

module.exports = {hashPassword};
