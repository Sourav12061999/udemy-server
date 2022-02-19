const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const user = require("../Schemas/users.schema");
passport.use(
  new GoogleStrategy(
    {
      clientID:
        "14082363482-mru7r6gtg8ek1l4vme9jlsrlsvm8vhl9.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL:
        "https://udemy-clone-server-node.herokuapp.com/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
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
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: "627882748352948",
      clientSecret: "97451c8707c08a1e533d661c45cc5df8",
      callbackURL:
        "https://udemy-clone-server-node.herokuapp.com/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      return done(null, "done");
    }
  )
);

module.exports = passport;
