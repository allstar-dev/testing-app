//load testing libraries 
process.env.NODE_ENV = 'test';
var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app.js');
var should = chai.should();
var expect = chai.expect;

chai.use(chaiHttp);

describe('homepage', function() {
	it('Should respond to GET', function(done) {
		chai.request(app)
			.get('/')
			.end(function(error, response){
				response.should.have.status(200);
				done();
			});
	});
});

describe('rooms', function() {
	describe('GET', function() {
		it('Should respond with room names', function(done) {
			chai.request(app)
				.get('/api/rooms')
				.end(function(error, response){
					response.should.have.status(200);
					response.body.should.be.a('array');
					done();
				});
		});
	});
});