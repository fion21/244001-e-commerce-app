#### Commit Eight

Re-rendered/renamed cartComponent to Cart.js

## Cart.js Adding to cart, updating the price, totaling.

Looked into the provisions for this and have implemented the code on the following basis:

Using `reduce()` in-build JS function to iterate over each `item` element in the array and then accumulate `acc` the result to the total value based on this we can implement the total based on the callback functions two paramaters aforementioned `(acc, item)`.

    Inside of this function a further *drill down* with the dot notation, accumulator plus item.price can add the current item(book selected) to the accumulator.

    The second argument starts the counter at 0.
    Once iteration has been performed, reduce() will return the total value out of all the items(books selected) in the cart.

## key={item.id}
Keys are used to give an identity to the elements in the lists and also traks what as been updated.

## total.toFixed(2)
Is the way to ensure that the total price is formatted with two decimal places. Also the `.toFixed` method is an in-built JS method.

## CartItem.js
Further drill down for item rendering

## BookClass to Book.js
updated naming to simplify confusion. Decided to just call the class Book.
Deleted previous Book.js which was first attempt at this class.

`const BookOne = new BookClass("234", "Harry Potter and ...", "JK Rowling", " Fiction ", 6.99, <img src={hp1} alt="title2" />);`
Had an issue with rendering the image.
After some refactoring, came up with this
 `{ id: 2, title: 'The Player', author: 'Boris Becker', price: 17.99, image: <img src={bb1} alt={""}/>}`
 Moved this logic to the App.js file

 ## Design
 added `import { ShoppingCart } from "phosphor-react";` which was installed with `npm install --save phosphor-react` which is a free icon library containing a shopping trolly icon.

 ## App.css
 Added the url link for google fonts for Roboto Mono to all the typography.
 Two main colours are in the theme, bright pink and dark blue.
 The cart wording is also blue.
 Shadow feature on the Remove button.

## App.js
Re-rendered addToCart with new naming, removeFromCart function was added

The built-in JS `.filter()` method  will effectively filter out, hence return a new array containing the elements which the callback function has returned true.
`setCart(cart.filter(item => item.id !== itemToRemove.id));`

## BookList.js
Is essentially mapping through the `book` parameter in `Book.js` and selecting the item.id in `Cart.js`.

## Testing
Installed Mocha for testing



