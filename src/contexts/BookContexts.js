import { createContext, useState} from 'react';
import {v1 as uuidv1 } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = ({children}) =>{
  // define state
  const [books, setBooks] = useState([
    {title: "barking dog", author: 'mike owen', id: 1},
    {title: "barking dog", author: 'mike owen', id: 1}
  ])

  // addBook method
  const addBook = (title, author) =>{
    setBooks([...books, {title, author, id: uuidv1() }])
  }

   // removeBook method
  const removeBook = (id) =>{
    setBooks(books.filter(book => book.id !== id))
  }

  return(
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {children}
    </BookContext.Provider>
  )
}

export default BookContextProvider;