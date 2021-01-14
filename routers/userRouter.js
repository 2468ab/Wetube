import express from "express";
import { changePassword, editProfile, userDetail, users } from "../controllers/userController";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.userDetail, (req, res) => userDetail);
userRouter.get(routes.editProfile, (req, res) => editProfile);
userRouter.get(routes.changePassword, (req, res) => changePassword);

export default userRouter;