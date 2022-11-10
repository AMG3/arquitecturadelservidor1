import config from "../config/config.js";
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
    }
  };
}
