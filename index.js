require('./DatabaseConfig/connection');
const express = require('express');
const dotenv = require('dotenv').config();
const logger = require('./Logger/logger');
const port = process.env.PORT || 8000;
const routes = require('./Routes/userRoutes');
const app = express();

app.use(express.json());

app.use('/api',routes);

app.listen(port,()=>{
    logger.info(`Listening to Port ${port}`)
})

module.exports = app;