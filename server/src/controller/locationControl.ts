import express, { Request, Response, NextFunction, Router } from "express";
import dotenv from "dotenv";
import Location from "../model/LocationModel";
dotenv.config();
class locationController {
  async renderLocation(req: Request, res: Response) {
    try {
      const data = await Location.find();
      data && res.json({ data: data });
      // console.log(data, `du lieu cua Location`);
    } catch (error) {
      console.log(error, "Khong lay duoc du lieu LOcation");
      res.json("Khong Lay dc du lieu");
    }
  }
  async creatLocation(req: Request, res: Response) {
    try {
      const data = req.body;
      const newLocation = new Location(data);
      await newLocation.save();
    } catch (error) {
      console.log(error, "Khong tao duoc");
    }
  }
}
export default new locationController();
