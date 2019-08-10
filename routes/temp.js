const connection = require('../config/connection');
const {status200,status500} = require('../api/header');
const express = require('express');
const router = express.Router();

router.get('/temp', (req,res,next) => {
    let getTempQuery = 'SELECT * FROM temps';
    connection.query(getTempQuery,(err, result, fields) => {
        if(err){
            res.status(500).json({
                header: status500(err),
                body: {
                   'result': null
                }
            });
        }else{
            res.status(200).json({
                header: status200,
                body: {
                    'result': result
                }
            });
        }
    });  
});

router.post('/temp/add',(req,res,next) => {
    let { value } = req.body;
    let insertTempQuery =  `INSERT INTO temps(value) VALUES(${value})`;
    connection.query(insertTempQuery,(err,result,fields) => {
        if(err){
            res.status(500).json({
                header: status500(err),
                body: {
                   'result': null
                }
            });
        }else{
            res.status(200).json({
                header: status200,
                body: {
                    'result': result
                }
            });
        }
    });
})



module.exports = router;    