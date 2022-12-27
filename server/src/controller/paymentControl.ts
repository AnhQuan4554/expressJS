import express, { Request, Response, NextFunction, Router } from "express";
import PaymentModel from "../model/PaymentModel";
import dotenv from "dotenv";
dotenv.config();
class PaymentController {
  async renderPayment(req: Request, res: Response) {
    try {
      const data = await PaymentModel.find();
      res.json({ data: data });
      // console.log(data);
    } catch (error) {
      console.log(error, "loi roi");
    }
  }
  async creatPayment(req: Request, res: Response) {
    try {
      const data = req.body;
      const newPay = new PaymentModel(data);
      await newPay.save();
    } catch (error) {
      console.log("chua luu dc");
    }
  }
}
export default new PaymentController();
