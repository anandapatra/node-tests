var add = (a, b) => {
    return a + b ;
};

var asyncAdd = (a, b, callback) => {
   setTimeout(() => {
      callback(a+b);
   }, 1000);
};

var square = (a) => {
    return a*a;
};

var asyncSquare = (a, callback) => {
    setTimeout(()=> {
        callback(a*a);
    }, 1000);
};

var setName = (user, fullName) => {
    var names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
    
    return user;
};

module.exports = {
    add,
    square,
    setName,
    asyncAdd,
    asyncSquare
};