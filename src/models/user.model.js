import mongoose from "mongoose";

const collection = "Users";

const schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

export default { collection, schema };
