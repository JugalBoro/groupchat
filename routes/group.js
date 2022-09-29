const express = require('express');

const router = express.Router();

const Middleware = require('../middleware/authenticate')
const groupController = require('../controller/group');

router.post('/creategroup', Middleware.auth,groupController.createGroup);

router.post('/addmember', Middleware.auth,groupController.addMember);

router.get('/name', Middleware.auth,groupController.userGroup);

router.get('/getchat', Middleware.auth,groupController.getGroupChat);

router.post('/sendchat', Middleware.auth,groupController.postToGroup);




module.exports = router;