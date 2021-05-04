const router = require('express').Router();
const SiteController = require('../controllers/SiteController');

router.get('/', SiteController.home);

module.exports = router;