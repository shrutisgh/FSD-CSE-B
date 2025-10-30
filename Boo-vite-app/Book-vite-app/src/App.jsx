import React from 'react'
import Header from './component/Header.jsx'
import Footer from './component/Footer.jsx'
import Book from './component/Book.jsx'
import './App.css'

const App = () => {
  const data=[
    // {title:"The Great Gatsby",price:"$10.99",img:"https://m.media-amazon.com/images/I/81af+MCATTL.jpg"},
    // {title:"To Kill a Mockingbird",price:"$8.99",img:"https://m.media-amazon.com/images/I/81OtwF1XW-L.jpg"},
    // {title:"1984",price:"$9.99",img:"https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg"},
    // {title:"Pride and Prejudice",price:"$7.99",img:"https://m.media-amazon.com/images/I/81vg6qJVV-L.jpg"},
    // {title:"The Catcher in the Rye",price:"$6.99",img:"https://m.media-amazon.com/images/I/71Q1Iu4suSL.jpg"}
    {
      title: "The Great Gatsby",
      price: "$10.99",
      img: "https://m.media-amazon.com/images/I/81af+MCATTL.jpg"
    },
    {
      title: "To Kill a Mockingbird",
      price: "$8.99",
      img: "https://m.media-amazon.com/images/I/81OtwF1XW-L.jpg"    
    },
    {
      title: "1984",
      price: "$9.99",
      img: "https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg"

    },
    {
      title: "Pride and Prejudice",
      price: "$7.99",
      img: "https://m.media-amazon.com/images/I/81vg6qJVV-L.jpg"
    },
    {
      title: "The Catcher in the Rye",
      price: "$6.99",
      img: "https://cdn.shopify.com/s/files/1/0018/4723/0510/products/6019_Pearson_Chemistry_2012_Book_Cover_Page_1_405cffbc-f4ea-4650-951f-8d65c3db367b_1024x1024@2x.jpg?v=1554235648"

    }
  
  ]
  return (
    <>
    <Header/>
    <div className='book-list'>
      {data.map((book, index) => (
        <Book key={index} title={book.title} price={book.price} img={book.img} />
      ))}
       <Book/>
        <Book/>
         <Book/>

    </div>
    <Footer/>
    </>
    
  )
}

export default App
