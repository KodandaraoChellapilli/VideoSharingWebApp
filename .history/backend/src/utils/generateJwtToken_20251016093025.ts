import { IUser } from "../model/userSchema";
import jwt from "jsonwebtoken";

export const generateJwtToken = async (user: IUser): Promise<string> => {
  const secretOrKey = process.env.JWT_SECRET_KEY;

  const jwtToken = await jwt.sign(user.toJSON(), secretOrKey as string, {
    expiresIn: "1d",
  });

  return jwtToken;
};
