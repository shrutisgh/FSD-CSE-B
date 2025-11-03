// import React from 'react'

// function Book({book}) {
//   return (
//     <div className='card'>
//       <img src={Book.image} width="200" height="200" alt="img"/>
//       <h3>Title:{Book.title}</h3>
//       <h2>Price:{Book.price}</h2>
//       <button>Add To Cart</button>
//     </div>
//   )
// }

// export default Book
// // "https://img.freepik.com/premium-photo/children-story-book_841014-28650.jpg"


import React from 'react'

function Book({ book }) {
    const[count,setCount]=React.useState(0);
  return (
    <div className='card'>
      <img src={book.image} width="200" height="200" alt={book.title} />
      <h3>Title: {book.title}</h3>
      <h2>Price: ${book.price}</h2>
      <button>Add To Cart</button>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <span style={{ margin: '0 10px' }}>{count}</span>
        <button onClick={() => setCount(count - 1)} disabled={count === 0}>-</button>

      </div>
    </div>
  )
}

export default Book
