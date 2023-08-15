import React, { useState } from 'react'
import './Book.css'


const Book = () => {
// const [name , setName] = useState("");
// const [email , setEmail] = useState("");
// const [password , setPassword] = useState("");

const [formData , setformData] = useState({
  name: '',
  email:'',
  password:'',
});

// const handleName = (e) => {
//   setName(e.target.value);
// }
// const handleEmail = (e) => {
//   setEmail(e.target.value);
// }
// const handlePassword = (e) => {
//   setPassword(e.target.value);
// }
const handleInput = (e) => {
  const {name,value} = e.target;
  setformData({
    ...formData,[name]:value
  })
}
const handleSubmit = (e) => {
e.preventDefault();
}
 return(
  <form onSubmit={handleSubmit}>
    <label>Enter Your Name : </label><br/>
    <input type='name' name='name' value={formData.name} onChange={handleInput}></input>
      <br/><br/>
    <label>Enter Your Email : </label><br/>
    <input type='email' name='email' value={formData.email} onChange={handleInput}></input>
    <br/><br/>
    <label>Enter Your Password : </label><br/>
    <input type='password' name='password' value={formData.password} onChange={handleInput}></input>
    <br/><br/>
    <button type='submit'>Submit</button>
    </form>
 )
}

export default Book
