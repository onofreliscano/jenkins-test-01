var request = require('supertest');
var app = require('../index.js');

describe('GET /', function() {
	it('respond with a company name', function(done){
		request(app).get('/').expect('NativApps: Jenkins + Github and more', done);
	})
});
