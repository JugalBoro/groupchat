const express = require('express');

const user  = require('../controller/user');

const router = express.Router();

router.post('/signup',user.userSignUp);

router.post('/login', user.userLogin);


module.exports = router;