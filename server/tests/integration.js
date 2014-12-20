/*global describe:true, it:true */
var request = require('supertest');
var should = require('should');
var expect = require('chai').expect;
var app = require('../index');

var _ = require('lodash');

describe('Auth', function () {

  it('should sign up the user', function () {

  });

  it('should authenticate the user', function () {

  });

  it('should logout the user', function () {

  });

});

describe('API', function () {

  //this depends on database insertions from db.tests
  describe('Project', function () {

    it('should get all of the user\'s projects on GET /project', function (done) {
      request(app)
        .get('/api/project')
        .expect(200)
        .end(function (err, res) {
          // console.log('below is body');
          // console.log(res.body);
          var projects = res.body;
          // console.log('projects', projects);
          projects.should.be.instanceof(Array);
          projects[0].should.have.property('id');
          projects[0].should.have.property('project_name');
          projects[0].should.have.property('created_at');
          projects[0].should.have.property('updated_at');
          projects[0].should.have.property('user');
          done();
        });
    });

    //SHOULD THIS BE AN OBJECT OR IS THERE A SITUATION WHERE THERE COULD BE MORE THAN ONE????
    //CHANGE SO THAT IT'S /project/:project_name IN ALL THE STUFF. PEOPLE AREN'T GOING TO SEARCH BY ID
    it('should get a specific project on GET /project/:id', function (done) {
      request(app)
        .get('/api/project/2')
        .expect(200)
        .end(function (err, res) {
          var project = res.body;
          console.log('project', project);
          project.should.be.instanceof(Object);
          project.should.have.property('id');
          project.should.have.property('project_name');
          project.should.have.property('created_at');
          project.should.have.property('updated_at');
          project.should.have.property('user');
          project.user.should.be.instanceof(Array);
          done();
        });
    });

    it('should create a new project on POST /project', function () {

    });

  });

  describe('User', function () {

    it('should get all of the users and their projects on GET /user', function (done) {
      request(app)
        .get('/api/user')
        .expect(200)
        .end(function (err, res) {
          // console.log('below is body');
          // console.log(res.body);
          var users = res.body;
          console.log('users', users);
          users.should.be.instanceof(Array);
          users[0].should.have.property('id');
          users[0].should.have.property('username');
          users[0].should.have.property('githubId');
          users[0].should.have.property('githubName');
          users[0].should.have.property('githubEmail');
          users[0].should.have.property('githubLocation');
          users[0].should.have.property('githubAccessToken');
          users[0].should.have.property('githubAvatarUrl');
          users[0].should.have.property('created_at');
          users[0].should.have.property('updated_at');
          users[0].should.have.property('project');
          done();
        });
    });

    // CHANGE THIS TO GITHUB HANDLE INSTEAD OF ID!! CHANGE IT IN PROJECT CONTROLLER AND ROUTERS TOO!!!!!
    // CHANGE THE POST REQUESTS TO ADD ALL THE GITHUB STUFF TOO!!!!!!
    it('should get a specific user on GET /user/:id', function (done) {
      request(app)
        .get('/api/user/2')
        .expect(200)
        .end(function (err, res) {
          var user = res.body;
          console.log('user', user);
          user.should.be.instanceof(Object);
          user.should.have.property('id');
          user.should.have.property('username');
          user.should.have.property('githubId');
          user.should.have.property('githubName');
          user.should.have.property('githubEmail');
          user.should.have.property('githubLocation');
          user.should.have.property('githubAccessToken');
          user.should.have.property('githubAvatarUrl');
          user.should.have.property('created_at');
          user.should.have.property('updated_at');
          user.should.have.property('project');
          user.project.should.be.instanceof(Array);
          done();
        });
    });

    it('should get all user info on GET /user/:github_handle', function () {

    });

  });

});