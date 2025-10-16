import { Request, RequestHandler } from "express";
import User from "../../model/userSchema";
import { sendResponse } from "../../utils/sendResponse";
import crypto from "crypto";
import { generateJwtToken } from "../../utils/generateJwtToken";
import {
  compareHashedPassword,
  hashPassword,
} from "../../utils/passwordHelper";

interface RegisterRequest extends Request {
  body: {
    email: string;
    password: string;
  };
}

export const signUpUser: RequestHandler = async (req: RegisterRequest, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return sendResponse(res, 400, false, "User already exists");
    }

    // ✅ Corrected function name
    const hashedPassword = await hashPassword(password);

    const newUser = await User.create({
      email,
      password: hashedPassword,
      token: crypto.randomBytes(16).toString("hex"),
    });

    return sendResponse(res, 200, true, "User Created successfully", {
      user: newUser,
    });
  } catch (error) {
    console.error(`Error in signing up the user: ${error}`);
    return sendResponse(res, 500, false, "Internal server error");
  }
};

export const signInUser: RequestHandler = async (req: RegisterRequest, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return sendResponse(res, 404, false, "Account does not exist");
    }

    const matchPassword = await compareHashedPassword(password, user.password);
    if (!matchPassword) {
      return sendResponse(res, 400, false, "Password does not match");
    }

    const jwtToken = await generateJwtToken(user);
    sendResponse(res, 200, true, "Logged in successfully", { user: jwtToken });
  } catch (error) {
    console.error(`Error in signing in the user: ${error}`);
    return sendResponse(res, 500, false, "Internal server error");
  }
};
