const express = require('express');
const router = require('express').Router();
const userController = require('../Controllers/userController');

router.get('/users',userController.getAllUsers);

router.post('/createUser',userController.createUser);

router.post('/updateUser/:emailId',userController.updateUser);

module.exports = router;