import React, { useState } from "react";
import loginImg from "../../../assets/login.png";
import "./styles.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import ButtonComponent from "../../common/Button";

const Login = () => {
    let[email,setEmail] = useState("");
    let[password,setPassword] = useState("");
    let[error,setError] = useState("");

    useEffect(() => {
      window.otpless = (otplessUser) => {
       alert(JSON.stringify(otplessUser));
      };
     }, []);
                
              
    return (
        <div className="login">
          <div id="otpless-login-page"></div>
        </div>
    )
}

export default Login;
