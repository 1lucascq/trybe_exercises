import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Book from '../interfaces/BookInterface';
import BookService from '../services/BooksService';

class BooksController {
  constructor(private bookService = new BookService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const books = await this.bookService.getAll();
    res.status(StatusCodes.OK).json(books);
  };

  public getById = async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const book: Book = await this.bookService.getById(id);

    if (!book) {
      return res.status(StatusCodes.NOT_FOUND)
        .json({ message: 'Book not found!'});
    }

  res.status(StatusCodes.OK).json(book);
  }

  public create = async (req: Request, res: Response) => {
    const book = req.body;

    const bookCreated = await this.bookService.create(book);
    res.status(StatusCodes.CREATED).json(bookCreated);
  };

  public update = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const book = req.body as Book;
    // const book: Book = req.body; --> Dá na mesma aparentemente
    await this.bookService.update(id, book);

    res.status(StatusCodes.NO_CONTENT).json({ message: 'Book updated' });
  };

  public remove = async (req: Request, res: Response) => {
    const id: number = +req.params.id;
    await this.bookService.remove(id)

    res.status(StatusCodes.OK).json({ message: 'Book deleted' });
  }
}
export default BooksController;