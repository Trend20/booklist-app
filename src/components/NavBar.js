import React,{ useContext} from 'react'
import { BookContext } from '../contexts/BookContexts'

const NavBar = () => {
  const { books } = useContext(BookContext)
  return (
    <div className='navbar'>
      <h3>Kurt Reading List</h3>
      <p>Currently you have {books.length} books in your store!</p>
    </div>
  )
}

export default NavBar;