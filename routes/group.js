const express = require('express');

const router = express.Router();

const Middleware = require('../middleware/authenticate')
const groupController = require('../controller/group');

router.post('/creategroup', groupController.createGroup);

router.post('/addmember', groupController.addMember);

router.get('/name', groupController.userGroup);

router.get('/chat', Middleware.auth,groupController.getGroupChat);

router.post('/sendchat', Middleware.auth,groupController.postToGroup);




module.exports = router;