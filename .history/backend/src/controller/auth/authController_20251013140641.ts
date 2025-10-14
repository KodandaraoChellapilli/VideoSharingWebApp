import { Request, RequestHandler } from "express";
import User from "../../model/userSchema";

interface RegisterRequest extends Request {
  body: {
    email: string;
    password: string;
  };
}

export const signUpUser: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      //do nothing
      return sendResponse(res, 400, false, "User already exists");
    }

    const newUser = await User.create({
      email,
      password,
    });

    //send response of successful
  } catch (error) {
    console.error(`Error in signing up the user: ${error}`);

    //send fairlure response
  }
};
