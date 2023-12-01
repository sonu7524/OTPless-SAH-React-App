import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import accountImg from "../assets/account.png";

export default function AccountPage() {
    let[user,setUser] = useState({});

    useEffect(() => {
        const username = sessionStorage.getItem("username");
        const email = sessionStorage.getItem("email") === "undefined" ? "N/A" : sessionStorage.getItem("email");;
        const phone = sessionStorage.getItem("mobile") === "undefined" ? "N/A" : sessionStorage.getItem("mobile");
        setUser({username,email,phone});
    }, []);
    return (
        <div>
            <Header />
            <div className="account">
                <div className="account-card">
                    <div className="account-title">
                        <h1>ACCOUNT</h1>
                        <img style={{width: "10rem", height: "10rem"}} src={accountImg} alt="account" />
                    </div>
                    <div className="account-details">
                        <p>Name: {user.username}</p>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                        <p>Role: User</p>
                        <p>Status: <b style={{color: "green"}}>Active</b></p>
                    </div>
                </div>
            </div>
        </div>
    )
}