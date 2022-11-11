const router = require('express').Router();
const thoughtsRoutes = require('./api/thoughtsRoutes');
const usersRoutes = require('./usersRoutes');

router.use('/thoughts', thoughtsRoutes);
router.use('/users', usersRoutes);

module.exports = router;
