import express, { Request, Response, NextFunction, Router } from "express";
import User from "../model/UserModel";
import jwt, { Secret } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
class UserController {
  async getUsers(req: Request, res: Response) {
    const data = await User.find();
    console.log(data);
  }

  async userPostSignIn(req: Request, res: Response) {
    try {
      const data = req.body;
      const newUser = new User(data);
      if (!newUser) {
        console.log("thất bại");
      } else {
        console.log(req.body, "dữ liệu đưa lên server là");
        // await newUser.save();
      }
      const checkUser = await User.findOne({ name: data.name });
      console.log(checkUser);
      const accessToken = jwt.sign(
        { userID: newUser._id },
        process.env.ACCESS_TOKEN_SECRET as Secret
      );
      res.json({ accessToken: accessToken, user: checkUser });
      // return res.json({
      //   msg: "data insert success",
      //   newUser,
      // });
    } catch (error) {
      console.log(error);
    }
  }
  async userPostRegister(req: Request, res: Response) {
    try {
      const data = req.body;
      const newUser = new User(data);
      const checkExitUser = await User.findOne({ name: data.name });
      console.log(checkExitUser);
      // kieemr tra xem cos ton tai hay chua
      if (checkExitUser != null) {
        res.json({ errRegister: "Tên đăng nhập đã tồn tai" });
        return;
      }
      if (!newUser) {
        console.log("thất bại");
      } else {
        console.log(req.body, "dữ liệu đưa lên server là");
      }
      await newUser.save();
    } catch (err) {
      console.log(err);
    }
  }
  async deleteUserds(req: Request, res: Response) {
    const idDelete = req.params._id;
    try {
      const data = await User.findOneAndDelete({});
    } catch (error) {}
  }
}
export default new UserController();
function SignOptions(error: Error | null, encoded: string | undefined): void {
  throw new Error("Function not implemented.");
}
