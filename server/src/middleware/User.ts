import jwt, { Secret } from "jsonwebtoken";
import { Response, Request, NextFunction } from "express";
const verifyToken = (req: any, res: Response, next: NextFunction) => {
  const token = req.header("authorization")?.split(" ")[1];
  console.log(token);
  if (!token) {
    return res.status(401).json("Access token not found");
    // return res.json(token);
  }
  try {
    const decode: any = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET as Secret
    );
    req.userID = decode.userID;
    next();
  } catch (err) {
    console.log(err);
    res.status(403).json("Invalid Token");
  }
};
export default verifyToken;
