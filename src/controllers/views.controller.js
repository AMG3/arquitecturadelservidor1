import userService from "../services/user.service.js";

const home = (req, res) => {
  res.render("home");
};

const users = async (req, res) => {
  let users = await userService.getUsers();
  res.render("users", { users });
};
export default { home, users };
