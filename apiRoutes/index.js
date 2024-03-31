const router = require('express').Router();
const thoughtsRoutes = require('./thoughts-routes');
const usersRoutes = require('./users-routes');

router.use('/thoughts', thoughtsRoutes);
router.use('/users', usersRoutes);

router.use((req, res) => {
  res.status(404).send('404 Error! You went to the wrong place!');
});

module.exports = router;