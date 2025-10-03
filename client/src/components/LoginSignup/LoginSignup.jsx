import React from 'react'
import './LoginSignup.css'

import user_icon from  '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import student_icon from '../Assets/student.png'

const LoginSignup = () => {
  return (
    <div className="container">
      {/* Card header with logo and welcome text */}
      <div className="header">
        <img
          src="../Assets/foodgo-logo.png"
          alt="FoodGo"
          style={{ width: "120px", margin: "0 auto", display: "block" }}
        />
        <div className="text">Welcome to FoodGo</div>
        <div style={{ textAlign: "center", fontSize: "0.9rem", color: "#555" }}>
          Sign in to your account
        </div>
        <div className="underline"></div>
      </div>

      {/* Inputs */}
      <div className="inputs">
        {/* Email */}
        <div className="StudentNumber">
          <input type="studentnumber" placeholder="Student number" />
        </div>

        {/* Password */}
        <div className="input">
          <input type="password" placeholder="Password" />
        </div>
      </div>

      {/* Remember me + Forgot password */}
      <div className="forgot-password">
        <label>
          <input type="checkbox" /> Remember me
        </label>
        <span>Forgot password?</span>
      </div>

      {/* Sign in button */}
      <div className="submit-container">
        <div className="submit">Sign In</div>
      </div>

      {/* Sign up link */}
      <div style={{ textAlign: "center", marginTop: "15px", fontSize: "0.9rem" }}>
        Don’t have an account?{" "}
        <span style={{ color: "#ff6600", cursor: "pointer" }}>Sign Up</span>
      </div>
    </div> 
  )
}

// Export the component to be used in other parts of the app
export default LoginSignup
