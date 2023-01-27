const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const logger = require('../Logger/logger');
const mongoUrl = process.env.MONGO_URL
mongoose.set('strictQuery', false);
mongoose.connect(mongoUrl)
.then(()=>{
    logger.info('Database Connection Successful')
}).catch((err)=>{
    console.log(err);
    logger.error(`Database Connection Error ${err}`)
});