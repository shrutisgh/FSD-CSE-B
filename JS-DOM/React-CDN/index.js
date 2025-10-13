// const image=React.createElement("img",
//     {
//         src:"https://tse4.mm.bing.net/th/id/OIP.YSJE-m47WRFAFX1JP1r2jgHaL3?pid=Api&P=0&h=180",
//         width: "150",
//         height:"150",
//         alt:"book-image"
//     },null
// );
// const h4=React.createElement("h4",null,"Price:345/-");
// const child=React.createElement("div",{
//     className: "card"
// },image,h4);
// const parent=document.getElementById("root");
// // ReactDOM.render(child,parent); changed in react 19
// const root=ReactDOM.createRoot(parent);
// root.render(child);




// const images = [
//     {
//     src: "https://images.moviesanywhere.com/493d1e6367a9e091649fca766f573f5c/cbcb3d03-d078-43a1-b88e-eab9f588e381.jpg",
//     price: "299/-"
//   },
//   {
//     src: "https://tse4.mm.bing.net/th/id/OIP.YSJE-m47WRFAFX1JP1r2jgHaL3?pid=Api&P=0&h=180",
//     price: "345/-"
//   },
//    {
//     src: "https://d28hgpri8am2if.cloudfront.net/tagged_assets/cvr9781604334753/jungle-book-9781604334753_hr.jpg",
//     price: "499/-"
//   },
//   {
//     src: "https://images.moviesanywhere.com/493d1e6367a9e091649fca766f573f5c/cbcb3d03-d078-43a1-b88e-eab9f588e381.jpg",
//     price: "299/-"
//   },
//   {
//     src: "https://d28hgpri8am2if.cloudfront.net/tagged_assets/cvr9781604334753/jungle-book-9781604334753_hr.jpg",
//     price: "499/-"
//   },
//   {
//     src: "https://tse4.mm.bing.net/th/id/OIP.YSJE-m47WRFAFX1JP1r2jgHaL3?pid=Api&P=0&h=180",
//     price: "345/-"
//   },
//    {
//     src: "https://images.moviesanywhere.com/493d1e6367a9e091649fca766f573f5c/cbcb3d03-d078-43a1-b88e-eab9f588e381.jpg",
//     price: "299/-"

//   }
// ];

// const cards = images.map((item, index) =>
//   React.createElement(
//     "div",
//     { className: "card", key: index },
//     React.createElement("img", {
//       src: item.src,
//       width: "150",
//       height: "150",
//       alt: `book-image-${index + 1}`
//     }),
//     React.createElement("h4", null, `Price: ${item.price}`)
//   )
// );

// const container = React.createElement("div", { className: "card-container" }, ...cards);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);




const images = [
  {
    src: "https://images.moviesanywhere.com/493d1e6367a9e091649fca766f573f5c/cbcb3d03-d078-43a1-b88e-eab9f588e381.jpg",
    price: "299/-",
    bookname: "The Jungle Book"
  },
  {
    src: "https://tse4.mm.bing.net/th/id/OIP.YSJE-m47WRFAFX1JP1r2jgHaL3?pid=Api&P=0&h=180",
    price: "345/-",
    bookname:"The Jungle Book"
  },
  {
    src: "https://d28hgpri8am2if.cloudfront.net/tagged_assets/cvr9781604334753/jungle-book-9781604334753_hr.jpg",
    price: "499/-",
    bookname:"The Jungle Book"
  },
  {
    src: "https://images.moviesanywhere.com/493d1e6367a9e091649fca766f573f5c/cbcb3d03-d078-43a1-b88e-eab9f588e381.jpg",
    price: "299/-",
    bookname:"The Jungle Book"
  },
  {
    src: "https://d28hgpri8am2if.cloudfront.net/tagged_assets/cvr9781604334753/jungle-book-9781604334753_hr.jpg",
    price: "499/-",

  },
  {
    src: "https://tse4.mm.bing.net/th/id/OIP.YSJE-m47WRFAFX1JP1r2jgHaL3?pid=Api&P=0&h=180",
    price: "345/-",
    bookname:"The Jungle Book"
  },
  {
    src: "https://images.moviesanywhere.com/493d1e6367a9e091649fca766f573f5c/cbcb3d03-d078-43a1-b88e-eab9f588e381.jpg",
    price: "299/-",
    bookname:"The Jungle Book"
  }
];

// Create card for each image
const cards = images.map((item, index) =>
  React.createElement(
    "div",
    { className: "card", key: index },
    React.createElement("img", {
      src: item.src,
      width: "150",
      height: "150",
      alt: `book-image-${index + 1}`
    }),
    React.createElement("h4", null, `Price: ${item.price}`),
    React.createElement("h4", null, ` ${item.bookname}`),
    React.createElement(
      "div",
      null,
      React.createElement(
        "button",
        { className: "add-cart" },
        "Add to Cart"
      ),
      React.createElement(
        "button",
        { className: "buy-now" },
        "Buy Now"
      ),
      React.createElement(
        "button",
        { className: "wishlist" },
        "❤️",
        React.createElement("span", null, "Wishlist")
      )
    )
  )
);

const container = React.createElement("div", { className: "card-container" }, ...cards);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
