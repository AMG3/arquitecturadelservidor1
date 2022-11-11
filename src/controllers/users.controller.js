import MongoClient from "../dao/MongoClient.js";
import UserDTO from "../dto/user.dto.js";
import userService from "../services/user.service.js";

const getUsers = async (req, res) => {
  let users = await userService.getUsers();
  let parsedUsers = users.map((user) => new UserDTO(user));
  res.send({ parsedUsers });
};
const saveUser = async (req, res) => {
  let user = req.body;
  let result = await userService.addUser(user);
  res.send({ result });
};

export default {
  saveUser,
  getUsers,
};
