// routers/userRouter.js
const router = require('express').Router();
const { validateToken } = require('./validateData');
const ENDPOINT_API = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';
const axios = require('axios').default;

router.get('/', validateToken, async (_req, res) => {
    const { data } = await axios.get(ENDPOINT_API);

    res.status(200).json({ data });
});

module.exports = router;
