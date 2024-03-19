const router = require('express').Router();
const apiRoutes = require('./api');
const errorHandler = require('../middleware/errorHandler');

router.use(apiRoutes);
router.use(errorHandler);

module.exports = router;