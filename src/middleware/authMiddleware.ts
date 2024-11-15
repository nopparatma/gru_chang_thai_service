import { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "../utils/tokenUtils";

interface AuthenticatedRequest extends Request {
  user?: any;
}

export const authMiddleware = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): any => {
  //   const authHeader = req.headers["authorization"];
  //   const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN

  //   if (!token) return res.status(401).json({ message: "Access Token Required" });

  //   try {
  //     const user = verifyAccessToken(token);
  //     req.user = user;
  //     next();
  //   } catch (error) {
  //     return res.status(403).json({ message: "Invalid or Expired Token" });
  //   }
  next();
};
