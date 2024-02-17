import express, { Request, Response } from "express";
import PORT from "@/src/config/server";
import
authenticateDBConnection
  from "@/src/config/db"

const prepareAndStartUpServer = async () => {
  try {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.listen(PORT, () => {
      console.log(`Sever running on the port ${PORT}`);
    })
    authenticateDBConnection()

  } catch (error) {
    throw { error };
  }
};

prepareAndStartUpServer();
