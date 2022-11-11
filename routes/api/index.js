const router = require('express').Router();
const usersRoutes = require('./usersRoutes');
const reactionsRoutes = require('./thoughtsRoutes')
const thoughtsRoutes = require('./thoughtsRoutes')

router.use('/usersRoutes', usersRoutes);
router.use('/thoughts', thoughtsRoutes);
router.use('/reactions', reactionsRoutes);

module.exports = router;
