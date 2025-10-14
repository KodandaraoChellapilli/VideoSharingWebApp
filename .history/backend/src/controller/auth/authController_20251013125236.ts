import { Request, RequestHandler } from "express";

interface RegisterRequest extends Request {
  body: {
    email: string;
    password: string;
  };
}
