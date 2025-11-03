// import React from 'react'
// import Book from './Components/Book'
// import '../src/App.css'
// import Header from './Components/Header'
// import Footer from './Components/Footer'
// import './Components/Footer.css'
// import './Components/Header.css'
// import { useEffect } from 'react'




// const App = () => {
//   const [books,setBooks]=.useState([]);
  
//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//     .then(res=>res.json())
    
//     .then(data=>setBooks(data));
//   },[]);
//   return (
//     <>   
//      <Header/>

//     <div className='booklist'>
//       {books.map((b,i)=>(
//         <Book key={i} book={b}/>
//       ))}
//     </div>
//     <Footer/>
//     </>
//   )
// }

// export default App


import React, { useEffect, useState } from 'react'
import Book from './Components/Book'
import Header from './Components/Header'
import Footer from './Components/Footer'
import './App.css'
import './Components/Footer.css'
import './Components/Header.css'

const App = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.error('Error fetching books:', err))
  }, [])

  return (
    <>
      <Header />
      <div className='booklist'>
        {books.map((b, i) => (
          <Book key={i} book={b} />
        ))}
      </div>
      <Footer />
    </>
  )
}

export default App
