import express, { Router, Request, Response, NextFunction } from "express";
import RewardController from "../controller/rewardControl";
const routerReward = Router();
routerReward.get("/", RewardController.renderReward);
routerReward.post("/creat-reward", RewardController.creatReward);
export default routerReward;
