const router = require('express').Router();
const userRoutes = require('./users-routes');
const thoughtRoutes = require('./thoughts-routes')

router.user('/users', userRoutes);
router.user('/thoughts', thoughtRoutes);

module.exports = router;