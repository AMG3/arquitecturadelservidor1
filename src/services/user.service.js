import PersistenceFactory from "../dao/Factory.js";
import User from "../dao/user.js";

export class UserService {
  async findById(id) {
    try {
      return User.findById(id);
    } catch (error) {
      logger.error(error);
      throw new Error(error);
    }
  }

  constructor() {
    this.usersDao;
    this.init();
  }

  init = async () => {
    const { users } = await PersistenceFactory.getPersistence();
    const { users2 } = await PersistenceFactory.getPersistence();
    const { users3 } = await PersistenceFactory.getPersistence();
    this.usersDao = users;
  };

  getUsers = async () => {
    return await this.usersDao.getAll();
  };

  addUser = async (user) => {
    return await this.usersDao.save(user);
  };
  async findById(id) {
    try {
      return User.findById(id);
    } catch (error) {
      logger.error(error);
      throw new Error(error);
    }
  }
}

const userService = new UserService();
export default userService;
