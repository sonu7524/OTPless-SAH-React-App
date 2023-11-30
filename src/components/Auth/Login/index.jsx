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
        if (otplessUser) {
          sessionStorage.setItem("auth_token", otplessUser.token);
          sessionStorage.setItem("username", otplessUser.mobile.name);
          sessionStorage.setItem("email", otplessUser.email.email);
          window.location.href = "/dashboard";
        }
      };
     }, []);
              
    return (
        <div className="login">
        </div>
    )
}

export default Login;
