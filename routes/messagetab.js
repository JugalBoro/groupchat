const express = require('express');

const router = express.Router();

const Middleware = require('../middleware/authenticate')
const messageController = require('../controller/messageTab');

router.get('/join', Middleware.auth,messageController.getUser)

router.post('/message', Middleware.auth,messageController.postMessage)

router.get('/recieve', Middleware.auth,messageController.getMessage)



module.exports = router;