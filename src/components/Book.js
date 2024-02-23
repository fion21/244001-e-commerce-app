class Book {
  constructor(title, genre, price, image) {
    this.title = title;
    this.genre = genre;
    this.price = price;
    this.image = image;
  }
}
const BookOne = new Book("1984 ", " Sci-fi ", 4.99, " add image");
const BookTwo = new Book(" 1985 ", " Sci-fi ", 5.99, " add image");
const BookThree = new Book(" 1986 ", " Sci-fi ", 6.99, " add image");
const BookFour = new Book(" 1987 ", " Sci-fi ", 7.99, " add image");

const Books = [BookOne, BookTwo, BookThree, BookFour];

export default Books;
