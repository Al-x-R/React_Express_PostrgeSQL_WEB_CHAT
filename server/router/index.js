const router = require('express').Router();
const authRouter = require('./auth');
const userRouter = require('./user')

router.get('/', (req, res) => {
  return res.send('Home page');
});

router.use('/', authRouter);
router.use('/users', userRouter);

module.exports = router;