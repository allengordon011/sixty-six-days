import 'babel-polyfill';
import express from 'express';
import mongoose from 'mongoose';
import Goal from '../models/goal';

import bodyParser from 'body-parser';
const path = require('path');

const HOST = process.env.HOST;
const {PORT, DATABASE_URL} = require('./database');
mongoose.Promise = global.Promise;

const jsonParser = bodyParser.json();

console.log(`Server running in ${process.env.NODE_ENV} mode`);

const app = express();

app.use(express.static(process.env.CLIENT_PATH));
// app.use(express.static(path.join(__dirname, '../client'))); //required for tests
app.use(jsonParser);

//fetch goals from db
app.get('/api/home', (request, response) => {
  Goal.find({})
  .then((goals) => {
    return response.status(200).json(goals);
  })
  .catch(err => {
    console.error(err);
    response.status(500).json({message: 'internal server error'})
  })
})

//post a goal to db
app.post('/api/home', function(req, res) {

  let goal = new Goal()
      goal.goal = req.body.goal
      goal.save((err, goal) => {
          if(err){
              res.send(err)
          }

      Goal.find({}, (err, goals) => {
          if(err){
              res.send(err)
          }
          res.json(goals)
      })
  })
})

//change a goal
app.put('/api/home/:id', (req, res) => {
  Goal.findOneAndUpdate(
    {_id: req.params.id},
    {$set:{goal: req.body.goal}},
    {upsert: true},
    function(error){
      if (error) {
        console.error(error);
        res.sendStatus(400);
      }
      Goal.find({}, (err, goal) => {
          if(err){
              res.send(err)
          }
          res.json(goal)
      })
      }
  );
});

//change a goal status to completed
app.put('/api/home/completed/:id', (req, res) => {

  Goal.findOne({_id: req.params.id}, function(err,obj) {
  Goal.findOneAndUpdate(
    {_id: req.params.id},
    {$set:{completed: !obj.completed}},
    {upsert: true},
    function(error){
      if (error) {
        console.error(error);
        res.sendStatus(400);
      }
    });

      Goal.find({}, (err, goal) => {
          if(err){
              res.send(err)
          }
          res.json(goal)
      })
      }
  );
});

app.delete('/api/home/:id', (req, res) => {
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
