import './App.css'
import React from 'react'
import { Link } from "react-router-dom";



export function Login() {
  return (
    <div className="login">
        <form>
            <img src="https://drive.google.com/uc?id=1RXAribVNlQuwLXiURaEh4L0fE2ak15kz" alt="image1" />
            <h3>Welcome to Techarion</h3>
            <p>Please sign-in to your account and start the adventure</p>
            
            <div >
            <label for="uname"><b>Phonenumber</b></label>
             <input type="text" placeholder="Enter Username" name="uname" required/>
             <button type="submit">GETOTP</button>


              
                < br/>
              
                <label for="psw"><b>OTP</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />
                

              
                <Link to="/main"><button type="submit">Login</button></Link>


               <div className="social">
         
                            <a href="https://www.facebook.com/">
                    <img src="https://img.icons8.com/fluency/1x/facebook-new.png" alt="facebookimage" height="30px" width="30px"/>
                </a>
                <a href="https://twitter.com/">
                    <img src="https://img.icons8.com/fluency/1x/twitter.png" alt="twitterimage" height="30px" width="30px"/>
                </a>
                <a href="https://www.gmail.com/">
                    <img src="https://img.icons8.com/glyph-neue/1x/gmail-new.png" alt="gmailimage" height="30px" width="30px"/>
                </a>
                <a href="https://github.com/">
                    <img src="https://img.icons8.com/windows/1x/github.png" alt="Githubimage" height="30px" width="30px"/>
                </a>

               </div>
            </div>

        </form>
    </div>
  )
}
