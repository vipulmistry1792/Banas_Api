require('dotenv').config({path:"./config.env"});
const express = require('express')
const bodyParser   = require('body-parser');
const jwt          = require('./helpers/jwt')
const errorHandler = require('./helpers/error-handler')
const path             = require('path');
const cors             = require('cors');
const app=express();
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(cors());
//set static folder 
app.use(express.static(path.join(__dirname, 'static')));
// use JWT auth to secure the api
app.use(jwt());
// api routes
app.use('/users', require('./controllers/user.controller'));
app.use('/api/auth',require('./routes/auth'));
app.use('/api/energy',require('./routes/energy_cons'));
app.use('/api/meter',require('./controllers/meter_master.controller'));
app.use('/api/meterdata',require('./controllers/meter_data.controller'));
const PORT= process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});