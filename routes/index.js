const router = require('express').Router();
const thoughtsRoutes = require('./api/thoughtsRoutes');
const usersRoutes = require('./api/usersRoutes');

router.use('/thoughts', thoughtsRoutes);
router.use('/users', usersRoutes);

module.exports = router;
