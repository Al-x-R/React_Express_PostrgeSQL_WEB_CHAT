const router = require('express').Router();
const authRouter = require('./auth');
const userRouter = require('./user')
const chatRouter = require('./chat')

router.get('/', (req, res) => {
  return res.send('Home page');
});

router.use('/', authRouter);
router.use('/users', userRouter);
router.use('/chats', chatRouter);

module.exports = router;