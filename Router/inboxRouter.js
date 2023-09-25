//external imports
const express = require('express');
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse')

//internal import
const { getInbox } = require('../controller/inboxController')

const router = express.Router();

router.get('/', decorateHtmlResponse("inboxww"), getInbox)

module.exports = router;