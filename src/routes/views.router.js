import { Router } from "express";
import viewsController from "../controllers/views.controller.js";
import UserService from "../services/user.service.js";

const router = Router();

router.get("/", viewsController.home);
router.get("/users", viewsController.users);

export default router;
