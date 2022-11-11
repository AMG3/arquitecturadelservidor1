import config from "../config/config.js";
import UserMongoDao from "./usersMongo.dao.js";
import mongoose from "mongoose";
import MongoClient from "./MongoClient.js";

const PERSISTENCE = config.app.PERSISTENCE;
export default class PersistenceFactory {
  static getPersistence = async () => {
    switch (PERSISTENCE) {
      case "MEMORY":
        let { default: UserDaoMemory } = await import("./users.dao.js");
        return new UserDaoMemory();

      case "FILESYSTEM":
        let { default: UserDaoFile } = await import("./usersFile.dao.js");
        return new UserDaoFile();
      case "MONGO":
        const connection = MongoClient.getInstance();
       
      

        let { default: UserDaoMongo } = await import("./usersMongo.dao.js");
        return {
          users: new UserDaoMongo(),
        };
    }
  };
}
