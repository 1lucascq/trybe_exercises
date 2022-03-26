// ./interfaces/book.interface.ts
interface Book {
  id?: number;
  title: string;
  price: number;
  author: string;
  isbn: string;
}

/*
Exemplo do course

interface NewBook {
  title: string;
  price: number;
  author: string;
  isbn: string;
}

interface Book extends NewBook {
  id: number;

}

*/


export default Book;