import mongoose from "mongoose";
import userModel from "../models/user.model.js";

export default class UserMongoDao {
  constructor() {
    this.model = mongoose.model(userModel.collection, userModel.schema);
  }
  getAll = async () => {
    let results = await this.model.find().lean();
    return results;
  };
  save = async (user) => {
    let result = await this.model.create(user);
    return result;
  };
}
