// routers/userRouter.js
const router = require('express').Router();
const { validateRegister, validateLogin, generateToken } = require('./validateData');

router.post(
  '/register',
  validateRegister,
  (_req, res) => res.status(201).json({ message: 'user created' })
);

router.post(
  '/login',
  validateLogin,
  (_req, res) => res.status(200).json({ token: generateToken(6) })
);

module.exports = router;