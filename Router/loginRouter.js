//external imports
const express = require('express');

//internal import
const {getLogin, }=require('../controller/loginController')
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse')

const router = express.Router();

router.get('/',decorateHtmlResponse('loginn'), getLogin)

module.exports = router;