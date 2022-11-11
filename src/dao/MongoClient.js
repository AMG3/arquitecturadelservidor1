import mongoose from "mongoose";

export default class MongoClient {
  constructor() {
    this.connection = mongoose.connect(process.env.MONGODB_URI, (error) => {
      console.log("conectado");
    });
  }
  static getInstance = () => {
    if (!this.instance) {
      this.instance = new MongoClient();
    } else {
      return this.instance;
    }
  };
}
