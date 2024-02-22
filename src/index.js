const express = require("express");
const {PORT} = require("../src/config/server");
const authenticateDBConnection = require("../src/config/db");
const v1Routes = require("../src/routes/index");
const db = require("./models/index");
const {User, Role} = require("./models/index");
// const role = require("./models/role");
const prepareAndStartUpServer = async () => {
  try {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    await authenticateDBConnection();
    app.listen(PORT, () => {
      console.log(`Sever running on the port ${PORT}`);
    });
    app.use("/api", v1Routes);
    if (process.env.DB_SYNC) {
      db.sequelize.sync({alter: true});
      console.log("All models were synchronized successfully.");
    }
  } catch (error) {
    throw {error};
  }
};

prepareAndStartUpServer();
