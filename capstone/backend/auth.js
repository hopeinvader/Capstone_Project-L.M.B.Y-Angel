const passport = require('passport');
const passportJWT = require('passport-jwt');
const config = require('./config');

const ExtractJwt = passportJWT.ExtractJwt;

module.exports = function(){
    const strategy = new passportJWT.Strategy({
        secretOrKey: config.jwtSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    },(payload,done)=>{
        let user = this.knex.select('id', 'email', 'entrepneurs_investors').from('users').where('id', payload.id)
           return user.then((res)=>{
                if (res[0].id == payload.id ) {
                    return done(null, {id: user.id});
                } else {
                    return done(new Error("User not found"), null);
                }
            })
    });
    passport.use(strategy);

    return {
        initialize: function() {
            return passport.initialize();
        },
        authenticate: function() {
            return passport.authenticate("jwt", config.jwtSession);
        }
    };
}