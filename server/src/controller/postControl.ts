import express, { Request, Response, NextFunction, Router } from "express";
import Post from "../model/PostModel";
import dotenv from "dotenv";
dotenv.config();
class postController {
  async renderPost(req: Request, res: Response) {
    const data = await Post.find();
    res.json({ data: data });
  }
  async creatPost(req: Request, res: Request) {
    try {
      const data = req.body;
      const newPost = new Post(data);
      await newPost.save();
    } catch (error) {
      console.log(error);
    }
  }
}
export default new postController();
