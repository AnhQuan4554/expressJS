import jwt, { Secret } from "jsonwebtoken";
import { Response, Request, NextFunction } from "express";
const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) {
    return res.status(401).json("Access token not found");
  }
  try {
    const decoded = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET as Secret
    );
    next();
  } catch (err) {
    console.log(err);
    res.status(403).json("Invalid Token");
  }
};
export default verifyToken;
