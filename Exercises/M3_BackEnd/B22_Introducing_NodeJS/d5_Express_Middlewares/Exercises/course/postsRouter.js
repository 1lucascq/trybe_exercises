// routers/userRouter.js
const router = require('express').Router();
const { validateToken } = require('./validateData');
const ENDPOINT_API = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';
const axios = require('axios');
const cors = require('cors');
router.use(cors())

router.get(
  '/:id',
  validateToken,
  async (_req, res) => {
    const btcRes = await axios.get(ENDPOINT_API).data
    console.log(btcRes)
    res.status(200).json({ btcRes })
});

module.exports = router;
