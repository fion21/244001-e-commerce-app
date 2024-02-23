import './App.css';
import { useState } from 'react';
import HP1 from "./hp1.jpg";
import bb1 from "./bb1.jpg";
import Books from './components/Book';

function App() {

const [bookdata, setBookdata] = useState(Books);

return (
  <div>
    {bookdata.map((bookk)=> {
      return (
<div className='App'>
        {bookk.title}
        {bookk.genre}
        {bookk.price}
        {bookk.image}
    </div>
      )
    })}
  </div>

 )
  }

export default App;
