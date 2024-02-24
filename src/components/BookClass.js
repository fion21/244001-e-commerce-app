

import bb1 from "../images/bb1.jpg";
import hp1 from "../images/bb1.jpg";


class BookClass {
  constructor(id, title, author, genre, price, image) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
    this.image = image;
  }
}

const BookOne = new BookClass("234", "Harry Potter and ...", "JK Rowling", " Fiction ", 6.99, <img src={hp1} alt="title2" />);

const BookTwo = new BookClass("222", "The Player","Boris Becker", "Autobiography ", 17.99, <img src={bb1} alt="title1" />);

const Books = [BookOne, BookTwo];

export default Books;
