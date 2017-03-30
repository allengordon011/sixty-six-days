const chai = require("chai");
const chaiHttp = require("chai-http");
const mongoose = require("mongoose");

// const {User} = require("../models/user")
const {app, runServer, closeServer} = require("../../server");
const should = chai.should();

const {TEST_DATABASE_URL} = require("../../server/database");

chai.use(chaiHttp);

function generateGoals() {
    let goals = ['ride a bike', 'take a hike']
    console.log('Creating users')

    // chai.request(app).post("/signup").send(user1).then(function(res) {
    //     console.log('HEY')
    //     // res.status(201).json({message: "test user created"})
    //     // return User.insertMany(users);
    // }).catch(function() {
    //     console.error("Test User Creation - Promise Rejected")
    // })
}

describe("Sixty-Six Days", function() {
    before(function() {
        return runServer(TEST_DATABASE_URL);
    });
    // beforeEach(function() {
    //     return generateUsers();
    // });
    //
    // afterEach(function() {
    //     return tearDownDb();
    // });
    after(function() {
        return closeServer();
    });

    describe("load HTML", function() {
        it("should load the index.html file from the root url", function() {
            return chai.request(app).get("/").then(function(res) {
                // res.should.have.status(200);
                console.log('res body: ', res.body)
                res.should.be.html;
            });
        });
        // it("should load the stocksaver.html file from the stocksaver url", function() {
        //     return chai.request(app).get("/stocksaver").then(function(res) {
        //         res.should.have.status(200);
        //         res.should.be.html;
        //     });
        // });
    });

    // describe("SIGNUP endpoint", function() {
    //     it("should create a user", function() {
    //         const newUser = {};
    //         return chai.request(app).post("/signup").send("spot","woof").then(function(res) {
    //             console.log('SIGNUP RES1', res.body)
    //
    //             // res.should.have.status(200);
    //             // res.should.be.html;
    //             // res.should.include("username");
    //         });
    //     });
    // })
})
