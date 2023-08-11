import React from 'react'
import Book from './Book';

const book1 = {

    image:"https://images-na.ssl-images-amazon.com/images/I/91n7p-j5aqL._AC_UL254_SR254,254_.jpg",
    title:"Fourth Wing",
    author_name:"Rebecca Yarros",
    price:"120.99"
    
}

const book2 = {

    image:"https://m.media-amazon.com/images/I/51AC2+BVowL._SY344_BO1,204,203,200_.jpg",
    title:"The Dragon Three",
    author_name:"Victoria Perkins",
    price:"50.99"
    
}

const book3 = {

    image:"https://m.media-amazon.com/images/I/41C+dLSa7-L._SY344_BO1,204,203,200_.jpg",
    title:"Dark Storm (Dragon's Gift: The Storm)",
    author_name:"Veronica Douglas",
    price:"13.99"
    
}

const Booklist = () => {
  
  return (
    <div>
      <Book image={book1.image} title={book1.title} author_name={book1.author_name} price={book1.price}/>
      <Book image={book2.image} title={book2.title} author_name={book2.author_name} price={book2.price}/>
      <Book image={book3.image} title={book3.title} author_name={book3.author_name} price={book3.price}/>
      
    </div>
  )
}

export default Booklist
