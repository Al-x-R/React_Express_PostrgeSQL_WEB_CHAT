const router = require('express').Router();
const authRouter = require('./auth');

router.get('/', (req, res) => {
  return res.send('Home page');
});

router.use('/', authRouter);

module.exports = router;