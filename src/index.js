const express = require("express");
const {PORT} = require("../src/config/server");
const authenticateDBConnection = require("../src/config/db");
const v1Routes = require("../src/routes/index");
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
  } catch (error) {
    throw {error};
  }
};

prepareAndStartUpServer();
