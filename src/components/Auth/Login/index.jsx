import React, { useState } from "react";
import "./styles.css";

const Login = () => {

    useEffect(() => {
      window.otpless = (otplessUser) => {
        alert(JSON.stringify(otplessUser));
        // Store user object in local storage
        localStorage.setItem('user', JSON.stringify(otplessUser));
      };
    }, []);
                       
    return (
        <div className="login">
          
        </div>
    )
}

export default Login;
