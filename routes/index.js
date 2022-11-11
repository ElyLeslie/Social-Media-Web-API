const router = require('express').Router();
const friendsRoutes = require('./api/friendsRoutes');
const users = require('./studentRoutes');

router.use('/courses', courseRoutes);
router.use('/students', studentRoutes);

module.exports = router;
