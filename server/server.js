const express = require('express'); // load express

var app = express(); // creates a express app

app.get('/', (req, res)=>{
    res.send('Hello World');
});

app.get('/users', (req, res) => {
   
   res.send([{
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
   ]);

});





app.listen(3000, ()=> {
    console.log('server started at port 3000');
});

module.exports.app = app;