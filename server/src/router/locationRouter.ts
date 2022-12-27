import express, { Router, Request, Response, NextFunction } from "express";
import locationControl from "../controller/locationControl";
const locationRouter = Router();
import verifyToken from "../middleware/User";
locationRouter.get("/", verifyToken, locationControl.renderLocation);
locationRouter.post("/creatLocation", locationControl.creatLocation);
export default locationRouter;
