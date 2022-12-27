import express, { Router, Request, Response, NextFunction } from "express";
import paymentControl from "../controller/paymentControl";
const router = Router();
router.get("/", paymentControl.renderPayment);
router.post("/creatPayment", paymentControl.creatPayment);
export default router;
