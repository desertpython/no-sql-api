const router = require('express').Router();

// const thoughtsRoutes = require('./thoughts.js');
const userRoutes = require('./user.js');


// router.use('/thoughts', thoughtsRoutes);
router.use('/users', userRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;