import { Request, Response } from "express";
import Reward from "../model/RewardModel";
import dotenv from "dotenv";
dotenv.config();
class RewardController {
  async renderReward(req: Request, res: Response) {
    try {
      const data = await Reward.find();
      res.json({ data: data });
    } catch (error) {
      console.log(error, "loi roi");
    }
  }
  async creatReward(req: Request, res: Response) {
    try {
      const data = req.body;
      const newReward = new Reward(data);
      await newReward.save();
    } catch (error) {
      console.log(error, "loi roi");
    }
  }
}
export default new RewardController();
