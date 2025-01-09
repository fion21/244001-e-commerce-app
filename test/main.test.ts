import { it, expect, describe } from "vitest";
import {booksData, addBook, removeFromCart} from "../src/components/app";

describe("addBook", () => {
  it("should add a book to the cart", () => {
    const book = booksData[0];
    let cart = [];
    cart = addBook(cart, book);
    expect(cart).toContain(book);
  });

  it("should add multiple books to the cart", () => {
    let cart = [];
    booksData.forEach(book => {
      cart = addBook(cart, book);
    });

    expect(cart.length).toBe(2);
  })


});
  
describe("removeFromCart", () => {
  it("should remove one book from the cart", () => {
    let cart = booksData;
    cart = removeFromCart(cart, booksData[0]);
    expect(cart).not.toContain(booksData[0]);
  });

  it("should remove only one book from the cart", () => {
    let cart = booksData;
    cart = addBook(cart, booksData[0]);
    cart = addBook(cart, booksData[0]);
    cart = addBook(cart, booksData[0]);
    cart = removeFromCart(cart, booksData[0]);
    console.log(cart);
    expect(cart.length).toBe(4);
  });
});