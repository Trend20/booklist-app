import React from 'react'

const BookDetails = ({book}) => {
  return (
    <div className='book-details'>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
    </div>
  )
}

export default BookDetails;