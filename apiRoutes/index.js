const router = require('express').Router();
const thoughtsRoutes = require('./thoughtRoutes');
const usersRoutes = require('./userRoutes');

router.use('/thoughts', thoughtsRoutes);
router.use('/users', usersRoutes);

router.use((req, res) => {
  res.status(404).send('404 Error! You went to the wrong place!');
});

module.exports = router;