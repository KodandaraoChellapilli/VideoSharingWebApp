import { IUser } from "../model/userSchema";

export const generateJwtToken = async (user: IUser): Promise<string> => {
  const secretOrKey = process.env.JWT_SECRET_KEY;

  const jwtToken = await j;
};
