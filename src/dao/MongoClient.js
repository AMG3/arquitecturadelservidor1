import mongoose from "mongoose";

export default class MongoClient {
  constructor() {
    this.connection = mongoose.connect(
      "mongodb+srv://test:poligamia12345@cluster0.fxygqmb.mongodb.net/test?retryWrites=true&w=majority",
      (error) => {
        console.log("conectado");
      }
    );
  }
  static getInstance = () => {
    if (!this.instance) {
      this.instance = new MongoClient();
    } else {
      return this.instance;
    }
  };
}
