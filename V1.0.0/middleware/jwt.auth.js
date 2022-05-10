const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
require('dotenv').config()

module.exports = (passport) => {
    var opts = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = process.env.JWT_KEY;

    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        console.log(jwt_payload);

        done(null, jwt_payload)
    }));
}