import { createContext, useState} from 'react';
import uuid from 'uuid/v1';

const BookContext = createContext();

const BookContextProvider = ({children}) =>{
  // define state
  const [books, setBooks] = useState([
    {title: "barking dog", author: 'mike owen', id: 1},
    {title: "barking dog", author: 'mike owen', id: 1}
  ])

  // addBook method
  const addBook = (title, author) =>{
    setBooks([...books, {title, author, id: uuid() }])
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