const siteController = require('../controllers/siteController');
const express = require('express');
const router = express.Router();

router.post('/setData', siteController.setData);
router.get('/', siteController.index);

module.exports = router;
