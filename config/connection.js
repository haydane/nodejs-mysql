var sql = require('mysql');
var connection = sql.createConnection({
    host: 'localhost',
    user: 'haydane',
    password: 'toor',
    database: 'nodeDb'
});
connection.connect(err => {
    if(err) console.log(err);
    console.log('db is connected!');
    
});

module.exports = connection;