const {randEmail, randPassword} = require("@ngneat/falso");
const bcrypt = require("bcrypt");
const {SALT_ROUNDS} = require("../config/server");

const hashPassword =  async(textPassword) => {
  try {
    const password =  await bcrypt.hash(textPassword, SALT_ROUNDS);
    return password;
  } catch (error) {
    console.log("error hashing password");
    throw error;
  }
};
const registerRandomUsers = (seedNumber) => {
  return Array.from({length: seedNumber}, () => ({
    email: randEmail(),
    password: hashPassword(randPassword()),
    createdAt: new Date(),
    updatedAt: new Date(),
  }));
};

module.exports = {hashPassword, registerRandomUsers};
