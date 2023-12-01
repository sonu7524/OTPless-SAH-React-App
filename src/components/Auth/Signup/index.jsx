import React, { useEffect } from "react";


function Signup() {
    useEffect(() => {
        // Initialize OTPless when the component mounts
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://otpless.com/auth.js';
        document.getElementById('otpless-login-page').appendChild(script);

        window.otpless = (otplessUser) => {
          console.log(otplessUser);
          // Store user object in local storage
          if(otplessUser){
            otplessUser.token && sessionStorage.setItem("auth_token", otplessUser.token);
            sessionStorage.setItem("username", otplessUser.email.name || otplessUser.mobile.name);
            sessionStorage.setItem("email", otplessUser.email.email);
            sessionStorage.setItem("mobile", otplessUser.mobile.mobile);
            window.location.href = "/dashboard";
          }
        };
        // Clean up the script when the component unmounts
        return () => {
          document.getElementById('otpless-login-page').removeChild(script);
        };
      }, []);

  return (
      <div className="signup">
          <div id="otpless-login-page"></div>
      </div>
  );
}

export default Signup;
