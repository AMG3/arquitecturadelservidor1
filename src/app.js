import express from "express";
import handlebars from "express-handlebars";
import viewsRouter from "./routes/views.router.js";
import usersRouter from "./routes/users.router.js";
import { __dirname } from "./utils.js";

const app = express();

app.use(express.json());

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use("/", viewsRouter);
app.use("/api/users", usersRouter);

const server = app.listen(8080, () =>
  console.log("Servidor escuchando en puerto")
);
