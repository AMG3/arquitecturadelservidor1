import * as dotenv from "dotenv";
dotenv.config();
import * as http from "http";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { engine } from "express-handlebars";
import flash from "connect-flash";
import session from "express-session";
import handlebars from "express-handlebars";
import viewsRouter from "./routes/views.router.js";
import usersRouter from "./routes/users.router.js";
import { __dirname } from "./utils.js";
import cartRoutes from "./routes/index.js";
import userRoutes from "./routes/user.js";
import passport from "./config/passport.js";

const app = express();

app.use(express.json());

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/", viewsRouter);
app.use("/api/users", usersRouter);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    defaultLayout: "layout.hbs",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
  })
);

app.use((req, res, next) => {
  res.locals.login = req.isAuthenticated();
  res.locals.session = req.session;
  next();
});

app.use("/user", userRoutes);
app.use("/", cartRoutes);

app.use((req, res, next) => {
  let err = new Error("Página no Encontrada");
  err.status = 404;
  next(err);
});

if (app.get("env") === "development") {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: err,
    });
  });
}

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: {},
  });
});

app.on("error", (err) => {
  console.error(err);
});

const server = app.listen(8080, () =>
  console.log("Servidor escuchando en puerto")
);
