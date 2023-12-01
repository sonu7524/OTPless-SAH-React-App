import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

      useEffect(() => {
        // Initialize OTPless when the component mounts
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://otpless.com/auth.js';
        document.getElementById('otpless-login-page').appendChild(script);

        window.otpless = (otplessUser) => {
          // Store user object in local storage
          if(otplessUser){
            otplessUser.token && sessionStorage.setItem("auth_token", otplessUser.token);
            sessionStorage.setItem("username", otplessUser.email.name || otplessUser.mobile.name);
            sessionStorage.setItem("email", otplessUser.email.email);
            sessionStorage.setItem("mobile", "+"+otplessUser.mobile.number);
            navigate("/dashboard");
          }
        };
        // Clean up the script when the component unmounts
        return () => {
          document.getElementById('otpless-login-page').removeChild(script);
        };
      }, []);
                       
    return (
        <div className="login">
          <div id="otpless-login-page"/>
        </div>
    )
}

export default Login;
