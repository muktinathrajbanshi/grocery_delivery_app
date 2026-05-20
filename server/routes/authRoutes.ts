import  Express  from "express";
import { login, register } from "../controllers/authController.js";

const authRouter = Express.Router();

authRouter.post("/register", register)
authRouter.post("/login", login)

export default authRouter;