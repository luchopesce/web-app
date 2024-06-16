import passport from "passport";
import { OAuth2Strategy as GoogleStrategy } from "passport-google-oauth";
import { options } from "./options.js";

const emails = ["luchopesce96@gmail.com"];

const googleAuth = async () => {
  try {
    passport.use(
      new GoogleStrategy(
        {
          clientID: options.google.clientIdGoogle,
          clientSecret: options.google.secretGoogle,
          callbackURL: options.google.callbackGoogle,
        },
        function (accessToken, refreshToken, profile, done) {
          const response = emails.includes(profile.emails[0].value);
          const user = {
            name: profile.displayName,
            email: profile.emails[0].value,
            photo: profile.photos[0].value,
          };
          // IF EXITS IN DATABASE
          if (response) {
            done(null, user);
          } else {
            // SAVE IN DATABASE
            done(null, user);
          }
        }
      )
    );
  } catch (error) {
    console.log("Missing google keys");
  }
};

export { googleAuth };
