import React from 'react'
import'../App.css'


const Book = () => {
    // handleAlt=()=>{
    //     alert("Book added to cart")
    // }
  return (
    <div className='display-card'>
    <div className='card'>
      <img src="https://cdn.shopify.com/s/files/1/0018/4723/0510/products/6019_Pearson_Chemistry_2012_Book_Cover_Page_1_405cffbc-f4ea-4650-951f-8d65c3db367b_1024x1024@2x.jpg?v=1554235648" width="200" height="200" alt="BOOK "/>
      <h3>Title:Physics</h3>
      <h4>Price:₹999/-</h4>
      <button className='btn' >Add to cart</button>
          </div>
    </div>
  )
}

export default Book
