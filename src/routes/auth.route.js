import { Router } from "express";
import authorizationController from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/login",authorizationController.login);

export default authRouter;
