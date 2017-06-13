// super test a library to test express app in dev
const request = require('supertest');

var app = require('./server').app;


describe('Server', ()=>{

describe('GET /', ()=>{
    // it tests a express app locally
    it('should return hello world response', (done) => {
    request(app)
    .get('/')
    .expect(200)
    .expect('Hello World')
    .end(done);
    });
});
   
describe('GET /users', ()=>{
it('should return an array of users', (done) => {

    request(app)
    .get('/users')
    .expect(200)
    .expect([
        {
               name:'Ananda',
               age:'32'
            },
           {
                 name:'Ayaan',
               age:'5'

           },
           {
               name:'Dalia',
               age:'27'

           }  

    ]).end(done);

});

});

});

