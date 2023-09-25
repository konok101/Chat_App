//external imports
const express = require('express');

//internal import
const {getUsers }=require('../controller/usersController')
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse')


const router = express.Router();

router.get('/',decorateHtmlResponse('users'), getUsers)

module.exports = router;