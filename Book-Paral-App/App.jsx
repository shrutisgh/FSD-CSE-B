import React from "react";
import "./App.css";

const books = [
  {
    title: "Math",
    price: "₹381",
    image: "https://m.media-amazon.com/images/I/81bMi-V2CWL._SL1500_.jpg",
  },
  {
    title: "Chemistry",
    price: "₹571",
    image: "https://m.media-amazon.com/images/I/61-Zr+12hGL._SL1000_.jpg",
  },
  {
    title: "Physics",
    price: "₹841",
    image: "https://m.media-amazon.com/images/I/81CMOSz8GIL._SL1500_.jpg",
  },
];

const App = () => {
  return (
    <div className="container">
      {books.map((book, index) => (
        <div key={index} className="card">
          <img src={book.image} alt={book.title} className="book-img" />
          <h2 className="title">Title: {book.title}</h2>
          <h3 className="price">Price: {book.price}/-</h3>
          <button className="btn">Add To Cart</button>
        </div>
      ))}
    </div>
  );
};

export default App;
