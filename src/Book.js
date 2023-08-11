import React from 'react'
import './Book.css'


const Book = (props) => {
const {image , title , author_name , price} = props;
  return (
    <div className='book'>
    <div className='book-img'>
    <img src={image}/>
    </div>
    <div className='book-info'>
    <h2>{title}</h2>
    <p className='book-author'>by {author_name} </p>
    <p className='book-price'>$ {price} </p>
    <button>ADD TO CART</button>
    </div>
    </div>
  )
}

export default Book
