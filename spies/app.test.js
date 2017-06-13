const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');


describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call spy correctly', ()=>{
       var spy = expect.createSpy();
       spy();
       expect(spy).toHaveBeenCalled();
    });

    it('should call saveuser correctly', ()=>{
       var email = 'patra.ananda@gmail.com';
       var password = '121231';
       app.handleSignup(email, password);
       expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });

});