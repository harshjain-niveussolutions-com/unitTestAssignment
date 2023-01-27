require('../DatabaseConfig/connection');
const mongoose = require('mongoose');
const User = require('../Models/user');
const logger = require('../Logger/logger');

exports.getAllUsers =async (req,res)=>{
    logger.info(`Get all users api initiated`)
    try {
        const allUser = await User.find({});
        if(allUser.length > 0){
            logger.info(`get User API executed`)
            res.status(200).json(allUser);
        }
        else{
            logger.error(`Get all users api error ${error}`)
            res.status(400).send('<h1>Error while getiing User list</h1>');
        }
    } catch (error) {
        logger.error(`Get all users api error ${error}`)
        res.status(400).send('<h1>Error while getiing User list</h1>');

    }
};

exports.createUser = async (req,res)=>{
    logger.info(`Creating user for ${req.body}`);
    const newUser = new User({
        name:req.body.name,
        number:req.body.number,
        active:req.body.active,
        emailId:req.body.emailId
    });
    newUser.save((err,result)=>{
        if(err){
            res.status(400).send('<h1>Error while creating User</h1>');
            logger.error(`Create User API Error ${err}`)
        } 
        else{
            res.status(200).send('User Created')
            logger.info(`get User API executed for ${req.body}`)
        } 
    })
}

exports.updateUser = async (req,res)=>{
    logger.info(`Updating user for ${req.body} and for query ${req.params}`);
    const myquery = {emailId:req.params.emailId}
    const newValues = req.body;
    User.updateOne(myquery,newValues,function (err,result){
        if(result.matchedCount == 0){
            res.status(501).send('<h1>Error while updating User</h1>');
            logger.error(`Update User API Error ${err}`)
        } 
        else{
            res.status(200).send('User Updated')
            logger.info(`Update User API executed for ${req.body}`)
        }
    })
}


