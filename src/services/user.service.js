import PersistenceFactory from "../dao/Factory.js";

class UserService {
  constructor() {
    this.usersDao;
    this.init();
  }

  init = async () => {
    const users = await PersistenceFactory.getPersistence();
    this.usersDao = users;
  };

  getUsers = async () => {
    return await this.usersDao.getAll();
  };

  addUser = async (user) => {
    return await this.usersDao.save(user);
  };
}

const userService = new UserService();
export default userService;
