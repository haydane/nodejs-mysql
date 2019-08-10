const express = require('express');
const connection = require('./config/connection');
const app = express();
const PORT = 3000;
app.get('/', (req,res,next) => {
    connection.query('select * from temps',(err, result, fields) => {
        if(err){
            res.send(JSON.stringify({'status': 200, 'error': err, 'response': null}))
        }else{
            res.send(JSON.stringify({'status': 200,'error': null,"response": result}));
        }
    });  
});



app.listen(PORT,() => console.log(`Server is listening on port ${PORT}`));
