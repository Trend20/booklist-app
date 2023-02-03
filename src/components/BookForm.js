import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContexts';

const BookForm = () => {
  const {addBook } = useContext(BookContext);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAddBook = (e) =>{
    e.preventDefault();
    addBook(title, author);
    setTitle('');
    setAuthor('');
  }
  return (
    <form className='book-form' onSubmit={handleAddBook}>
      <input type="text" placeholder='book title' value={title} onChange={(e) => setTitle(e.target.value)}/>
      <input type="text" placeholder='author' value={author} onChange={(e) => setAuthor(e.target.value)}/>
      <button type='submit'>Add Book</button>
    </form>
  )
}

export default BookForm;