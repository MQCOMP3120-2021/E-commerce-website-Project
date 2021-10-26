import React, {useState} from 'react';
import '../css/loginForm.css';
import loginImg from '../assets/loginImg.jpg';
import productService from '../services/productService';

const SignUp = ({setUser}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState ('')

  const signUpFormHandler =(event) => {
    event.preventDefault()
    console.log("Login form submitted")
  
  
  productService.signUp({username, password, name})
  .then(data => {
    console.log("Success, new user created:", data)
    setUser(data)
  })
  .catch(error =>{
    console.log("Error, new user not created:", error)
  })
  }
    return(
        <div className="LoginForm">

            <div className="loginSection">
              <div className="loginImg">
                <img src={loginImg} alt="pastry" className="loginImg"/>
              </div>
              <div className = "loginForm">
                <div className = "loginPadding">
                  <h3>Create your account</h3>
                  <form onSubmit={signUpFormHandler} className="signUpFormHandler">
                    <input type="text" name="name" placeholder="Your Full Name" onChange={e=>setName(e.target.value)}/>
                    <input type="text" name="username" placeholder="Username" onChange={e=>setUsername(e.target.value)}/>
                    <input type="password" name="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
                    <button type="submit">GO →</button>
                  </form>
                </div>
              </div>
            </div>
        </div>

        

    )}

export default SignUp;