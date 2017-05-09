import 'babel-polyfill';
import express from 'express';
import mongoose from 'mongoose';
const path = require('path');
import bodyParser from 'body-parser';
const jsonParser = bodyParser.json();
const morgan = require('morgan');
const app = express();
app.use(morgan('common'));
app.use(jsonParser);

const {User} = require('../models/user');
import Goal from '../models/goal';
 

// const cookieParser = require('cookie-parser');
const passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
var flash = require('connect-flash');


app.use(express.static(process.env.CLIENT_PATH));
// app.use(express.static(path.join(__dirname, '../client'))); //required for tests
console.log(`Server running in ${process.env.NODE_ENV} mode`);

mongoose.Promise = global.Promise;

// app.use(cookieParser('galapagos'));
app.use(session({
    secret: 'galapagos',
    // resave: true,
    // saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: (4 * 60 * 60 * 1000)
    }, // 4 hours
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

const HOST = process.env.HOST;
const {PORT, DATABASE_URL} = require('./database');

// app.get('*', function (request, response){
//   response.sendFile(path.resolve(process.env.CLIENT_PATH, 'index.html'))
// })

//protected endpoint
app.get('/app', isLoggedIn, function(req, res) {
    if(req.isAuthenticated() === true) {
        res.sendFile(path.resolve(process.env.CLIENT_PATH, 'index.html'))
    } else {
        res.sendStatus(403);
    }
});

app.get('/login', function(req, res) {
        res.sendFile(path.resolve(process.env.CLIENT_PATH, 'index.html'))

});

app.get('/signup', function(req, res) {
        res.sendFile(path.resolve(process.env.CLIENT_PATH, 'index.html'))

});

//user signup
app.post('/api/signup', passport.authenticate('local-signup', {
    failureFlash: true
}), function(req, res) {
    console.log('SESSION AT SIGNUP? ', req.session)
    res.status(201).json({user: req.user});
})

//user login
app.post('/api/login', passport.authenticate('local-login', {
    failureFlash: true
}), function(req, res) {
    console.log('SESSION AT LOGIN? ', req.session)
    res.status(200).json({user: req.user});

})

//user logout
app.get('/api/logout', function(req, res) {
    req.logout();
    req.session.destroy();
    res.json({redirectURI: '/'});
});

//user delete
app.delete('/api/user', isLoggedIn, function(req, res, next) {
    User.findByIdAndRemove(req.user._id, {}, function(err, obj) {
        if (err)
            next(err);
        req.session.destroy(function(error) {
            if (err) {
                next(err)
            }
        });
        res.json(200, obj);
    });
})

//user retrieval
app.get('/api/user', isLoggedIn, function(req, res, next) {
    // let stocks = req.user.stocks
    res.status(200).json({user: req.user});
});



//****OLD ENDPOINTS****//

//fetch goals from db
app.get('/api/goal', isLoggedIn, (req, res, next) => {
  Goal.find({_creator: req.user.username})
  .then((goals) => {
    return res.status(200).json(goals);
  })
  .catch(err => {
    console.error(err);
    res.status(500).json({message: 'internal server error'})
  })
})

//post a goal to db
app.post('/api/goal', isLoggedIn, function(req, res) {
  let goal = new Goal({ goal: req.body.goal, _creator: req.user.username })
    //   goal.goal = req.body.goal
    //   console.log('goal.goal?: ', goal)
      goal.save((err, goal) => {
          if(err){
              res.send(err)
          }

      Goal.find({_creator: req.user.username}, (err, goals) => {
          if(err){
              res.send(err)
          }
          res.json(goals)
      })
  })
})

//change a goal
app.put('/api/goal/:id', (req, res) => {
  Goal.findOneAndUpdate(
    {_id: req.params.id},
    {$set:{goal: req.body.goal}},
    {upsert: true},
    function(error){
      if (error) {
        console.error(error);
        res.sendStatus(400);
      }
      Goal.find({_creator: req.user.username}, (err, goal) => {
          if(err){
              res.send(err)
          }
          res.json(goal)
      })
      }
  );
});

//change a goal status to completed
app.put('/api/goal/completed/:id', (req, res) => {
    Goal.findOne({_id: req.params.id}, function(err,obj) {
        Goal.findOneAndUpdate(
            {_id: req.params.id},
            {$set:{completed: !obj.completed, sticker: req.body.sticker}},
            {upsert: true},
            function(error){
              if (error) {
                console.error(error);
                res.sendStatus(400);
          }
    });

      Goal.find({_creator: req.user.username}, (err, goal) => {
          if(err){
              res.send(err)
          }
          res.json(goal)
      })
      }
  );
});

app.delete('/api/goal/:id', (req, res) => {
  Goal.findByIdAndRemove(
    {_id: req.params.id},
    function(error){
      if (error) {
        console.error(error);
        res.sendStatus(400);
      }
    res.sendStatus(204);
    }
  );
})


//Check if user is logged in
function isLoggedIn(req, res, next) {
    console.log('isLoggedIn req session', req.session)
    console.log('isLoggedIn req', req.isAuthenticated())
    if (req.isAuthenticated()) {
        return next();
    } else {
        return res.status(403).json({message: 'User Not Logged In'});
        // return res.redirect('/login');
    }
}

passport.serializeUser(function(user, done) {
    console.log('Serializing User');
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    console.log('Calling Deserialize');
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

passport.use('local-signup', new LocalStrategy(function(username, password, done) {
    //process.nextTick(function() {
    username = username.toLowerCase()
    User.findOne({username: username}).exec().then(_user => {
        let user = _user;
        if (user) {
            console.error('User already exists');
            return done(null, false);
        }
        // console.log('Creating user');
        return User.hashPassword(password)

    }).then(hash => {
        return User.create({username: username, password: hash}).then(user => {
            done(null, user);
        });
    })
    .catch(function () {
         console.error("Signup Rejected");
    });
}));

passport.use('local-login', new LocalStrategy(function(username, password, done) {
    let user;
    username = username.toLowerCase()
    User.findOne({username: username}).exec().then(_user => {
        user = _user;
        if (!user) {
            return done(null, false, {message: 'Incorrect username'});
        }
        return user.isValidPassword(password);
    }).then(isValid => {
        if (!isValid) {
            console.log('Invalid Password');
            return done(null, false, {message: 'Invalid Password'});
        } else {
            console.log('Valid Password');
            return done(null, user, {message: 'Valid Password'});
        }
    })
    .catch(function () {
         console.error("Login Rejected");
    });
}));

let server;

function runServer(databaseUrl=DATABASE_URL, port=PORT) {
    return new Promise((resolve, reject) => {
      mongoose.connect(databaseUrl, err => {
          if (err) {
          return reject(err);
   }
   server = app.listen(port, () => {
       console.log(`Your app is listening on port ${port}. Your database is ${databaseUrl}.`);
       resolve();
       }).on('error', err => {
           mongoose.disconnect();
           reject(err);
       });
    });
    });
}

function closeServer() {
    return mongoose.disconnect().then(() => {
        return new Promise((resolve, reject) => {
            console.log('Closing server');
            server.close(err => {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        });
    });
}

if (require.main === module) {
    runServer();
}

module.exports = {
    app,
    runServer,
    closeServer
};
