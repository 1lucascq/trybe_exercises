// routers/userRouter.js
const router = require('express').Router();

const posts = [
  { postId: 1, author: 'José Neto', comment: 'Mais um dia de Sol !' },
  { postId: 2, author: 'Antonio Neto', comment: 'Hoje o dia está maneiro!' },
  { postId: 3, author: 'Rodrigo Garga', comment: 'To aqui também' },
]

router.get('/', (req, res) => {
  return res.status(200).json({ posts });
});

router.get('/:id', (req, res) => {
  const { id } = req.params
  if (!(posts.find(({postId}) => postId === +id))) return res.status(404).json({ message: 'not found' })

  return res.status(200).json({ message: 'ok' })
});

module.exports = router;
