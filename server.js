const express = require('express');
const bdps = require('body-parser');
const app = express();
const tempRouter = require('./routes/temp');
const swaggerUi = require('swagger-ui-express'), swaggerDoc = require('./api/swagger/swagger.json');
const PORT = 3000;

// parse with form-data
app.use(bdps.urlencoded({extended: false}));
// parse with application/JSON
app.use(bdps.json());

// setup swagger
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDoc));
app.get('/api/v1/api-docs',(req,res) => {
    res.send(swaggerDoc);
});

app.use('/api', tempRouter);

app.listen(PORT,() => console.log(`Server is listening on port ${PORT}`));
