import { Response } from "express";

interface ResponseData {
  [key: string]: unknown; // index signature
}

export const sendResponse = (
  res: Response,
  statusCode: number,
  success: boolean,
  message: string,
  data: ResponseData = {}
) => {
  res.status(statusCode).send({
    success,
    message,
    ...data,
  });
};
