const  dotenv  = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 8001;
module.exports= PORT;