const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const user = require("../Schemas/users.schema");
passport.use(
  new GoogleStrategy(
    {
      clientID:
        "961217226688-01upqbfi54n4ofuj8v3d3v9i61er9kl8.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL:
        "https://udemy-clone-server-node.herokuapp.com/auth/google/callback",
      // "/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      try {
        let User = await user
          .findOne({ email: profile._json.email })
          .lean()
          .exec();
        if (!User) {
          User = await user.create({
            email: profile._json.email,
            name: profile._json.name,
            password: "",
            cartCourses: [],
            boughtCourses: [],
          });
        }
        done(null, User);
      } catch (error) {
        done(null, error);
      }
    }
  )
);

// passport.use(
//   new FacebookStrategy(
//     {
//       clientID: "627882748352948",
//       clientSecret: "97451c8707c08a1e533d661c45cc5df8",
//       callbackURL:
//         "https://udemy-clone-server-node.herokuapp.com/auth/facebook/callback",
//     },
//     function (accessToken, refreshToken, profile, done) {
//       return done(null, "done");
//     }
//   )
// );

module.exports = passport;
