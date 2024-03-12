const UserModel = require('../models/user');
const passport = require('passport');
const LocalStrategy = require('passport-local');


passport.use(new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password'
    },
    function (username,password,done){
        UserModel.findOne({email : username})
                .then((user)=>{  console.log(user);
                    if(!user) { console.log("doesn\'t exist");
                    return done(null,false,{message:"This user doesn\'t exist"})}
                    if (user.password==password)
                            return done(null,user)
                    else return done(null,false,{message:"incorrect password"})
                })

    }))


passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
passport.deserializeUser((id, done) => {
    UserModel.findById(id)
        .then((user)=>done(null,user))
        .catch((err)=>done(err))
  });

  