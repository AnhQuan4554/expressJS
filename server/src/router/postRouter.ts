import express, { Router, Request, Response, NextFunction } from "express";
import postController from "../controller/postControl";
const postRouter = Router();
postRouter.get("/", postController.renderPost);
postRouter.post("/creatpost", postController.creatPost);
export default postRouter;
