import { Router } from 'express';
import BooksController from '../controllers/BooksController';
import validationBook from '../middlewares/BooksMiddleware';


const router: Router = Router();

const booksController = new BooksController();

router.get('/books', booksController.getAll);
router.get('/books/:id', booksController.getById);
router.get('/books/', validationBook, booksController.create)
router.get('/books/:id', validationBook, booksController.update)
router.get('/books/:id', booksController.remove)

export default router;