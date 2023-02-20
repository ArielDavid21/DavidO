import React, {useState} from 'react';
import './Loginform.css'
import lincoln from './lincoln.jpg'

const Loginform = () => {
    const [popupStyle, showPopup] = useState("hide")
    const popup = () => {
        showPopup("login-popup")
        setTimeout (() => showPopup("hide"), 3000)
    }
  return (
    <div>
        <div className="logo">
            <img src={lincoln} alt="" />
        </div>
      <div class="container">
      
        <div class="box">
            <div class="cover"></div>
            <div class="shadow"></div>
            <div class="content">
                <form action="" method="">
                <div class="form">
                    <h3 class="logo">
                     <img src="./images/lincoln.jpg" alt=""/> 
                    </h3>
                    <h2>Login</h2>
                    <div class="inputBox">
                        <input type="text" required />
                        <span>Username</span>
                    </div>
                    <div class="inputBox">
                        <input type="email" required />
                        <span>Email</span>
                    </div>
                    <div class="inputBox">
                        <input type="password" required />
                        <span>Password</span>
                    </div>
                    <div class="inputBox">
                        <input type="password" required />
                        <span>Confirm Password</span>
                    </div>
                    {/* <div className="inputBox">
                        <input type="Submit" value="Login" />
                    </div> */}
                    <div className="inputBox">
                        <button onClick={popup} >Submit</button>
                    </div>
                    <div className={popupStyle}>
                        <h3 class="button">Welcome To Lincoln</h3>
                        <p class="button">Are you a Student or a Lecturer?</p>
                    </div>
                </div>
            </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default Loginform
