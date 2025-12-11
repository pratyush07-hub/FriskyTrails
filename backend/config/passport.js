import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/user.model.js";

/**
 * Google OAuth Strategy Configuration
 * 
 * Required environment variables:
 * - GOOGLE_CLIENT_ID
 * - GOOGLE_CLIENT_SECRET
 * - API_URL (e.g., http://localhost:5000)
 */

const configurePassport = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: `${process.env.API_URL}/api/v1/user/google/callback`,
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const googleId = profile.id;
          const email = profile.emails?.[0]?.value;
          const avatar = profile.photos?.[0]?.value;
          const name = profile.displayName;

          // 1. Check existing Google user
          let user = await User.findOne({ googleId });

          if (user) {
            return done(null, user);
          }

          // 2. Check if user exists by email
          user = await User.findOne({ email });

          if (user) {
            // Link google account
            user.googleId = googleId;
            if (!user.avatar && avatar) {
              user.avatar = avatar;
            }

            await user.save();
            return done(null, user);
          }

          // 3. Create a new user
          user = await User.create({
            googleId,
            email,
            name,
            avatar,
            isVerified: true, // Google = Verified by default
          });

          return done(null, user);
        } catch (error) {
          console.error("Google OAuth Error:", error);
          return done(error, null);
        }
      }
    )
  );

  // Required for session login
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (error) {
      done(error, null);
    }
  });
};

export default configurePassport;
