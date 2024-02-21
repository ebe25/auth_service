const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 8001;
const SALT_ROUNDS = Number(process.env.SALT_ROUNDS) || 10;
const JWT_SECRET = process.env.JWT_SECRET;
module.exports = {PORT, SALT_ROUNDS, JWT_SECRET};
