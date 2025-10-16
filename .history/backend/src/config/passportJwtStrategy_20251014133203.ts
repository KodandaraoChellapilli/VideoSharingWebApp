import dotenv from "dotenv";
import passport from "passport";
import {
  ExtractJwt,
  Strategy as JWTStrategy,
  StrategyOptions,
} from "passport-jwt";

dotenv.config();

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET_KEY as string,
};

passport.use(
  new JWTStrategy(opts, async (jwt_payload, done) => {
    try {
      const user = await User.findById(jwt_payload.id).select("-password");
      if (!user) {
        return done(null, false);
      }

      return done(null, user);
    } catch (error) {
      console.error(`Error in JWT autentication: ${error}`);
      return done(error);
    }
  })
);
