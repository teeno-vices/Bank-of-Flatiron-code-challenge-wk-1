
import React from 'react'

function SearchTransaction({ handleSearchChange }) {
  return (
    <div >
      <input
        type="text"
        placeholder="Search transaction here..."
        className='search-transaction'
        onChange={handleSearchChange}
      />
    </div>
  )
}



export default SearchTransaction