import express, { Router, Request, Response, NextFunction } from "express";
import postController from "../controller/postControl";
import verifyToken from "../middleware/User";

const postRouter = Router();
postRouter.get("/", verifyToken, postController.renderPost);
postRouter.post("/creatpost", verifyToken, postController.creatPost);
export default postRouter;
