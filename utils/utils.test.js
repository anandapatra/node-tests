const utils = require('./utils');
const expect = require('expect'); // expect is a assertion library;



// groups test together using describe

describe('Utils', ()=>{

describe('#add', () => {
        // mocha method for testing square method
    it(('should return square of two numbers'), () => {

        var result = utils.square(4);
        if (result != 16) {
            throw new Error(`Expected 16, Actual ${result}`);
        }
    });
});   

// testing sync method using done.
it(('should return square of two numbers'), (done) => {

    var result = utils.asyncSquare(4, (data) => {
       expect(data).toBe(16).toBeA('number');
    });  
    done();
});


// mocha method for testing add method
it(('should return addition of two numbers'), () => {

    var result = utils.add(4, 3);
    if (result != 7) {
        throw new Error(`Expected 7, Actual ${result}`);
    }
});

// testing async function with done.
it(('should return addition of two numbers'), (done) => {

    var result = utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
   }); 

   done();  
});


// this is to test the set name method
it(('should return the object with first name and last name'), () => {
    var user = {
      location: 'New Jersey'
    };
    var res = utils.setName(user, 'Ananda Patra');
  //  console.log(res);
    expect(res).toInclude({
        firstName: 'Ananda',
        lastName: 'Patra'
    });    
}); 

});


