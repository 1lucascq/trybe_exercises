// routers/userRouter.js
const router = require('express').Router();

const posts = [{postId: 1}, {postId: 2}, {postId: 3}, {postId: 4}];


router.get('/', (req, res) => {
  return res.status(200).json(posts.map(p => JSON.stringify(p)));
});

router.get('/:id', (req, res) => {
  const { id } = req.params
  if (!(posts.find(({postId}) => postId === +id))) return res.status(404).json({ message: 'not found' })

  return res.status(200).json({ message: 'ok' })
});

module.exports = router;
