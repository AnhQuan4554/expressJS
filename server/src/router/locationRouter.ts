import express, { Router, Request, Response, NextFunction } from "express";
import locationControl from "../controller/locationControl";
const locationRouter = Router();
locationRouter.get("/", locationControl.renderLocation);
locationRouter.post("/creatLocation", locationControl.creatLocation);
export default locationRouter;
