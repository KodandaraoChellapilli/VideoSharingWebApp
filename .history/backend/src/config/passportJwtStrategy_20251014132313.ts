import dotenv from "dotenv";
import passport from "passport";
import { Strategy, StrategyOptions } from "passport-jwt";

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET_KEY as string,
};
