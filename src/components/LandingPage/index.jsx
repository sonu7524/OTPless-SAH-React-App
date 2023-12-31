import React from "react";
import homeImg from "../../assets/home.jpg";
import "./styles.css";
import DirectionsRunRoundedIcon from '@mui/icons-material/DirectionsRunRounded';
import ButtonComponent from "../common/Button";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate();
    const handleClick = () => {
        const authToken = sessionStorage.getItem("auth_token");
        if(authToken){
            navigate("/dashboard");
        }
        else{
            navigate("/login");
        }
    }
    return (
        <div className="home">
            <div className="home-content">
                <h1 className="home-title">Sale Analytics Hub</h1> 
                <p className="home-subtitle">Track your sales with ease.</p>
                <p className="home-btn" onClick={handleClick}><ButtonComponent text="Get Started" bgColor={"black"} icon={<DirectionsRunRoundedIcon />} isOutline={false} /></p>
            </div>
            <img className="home-img" src={homeImg} alt="home" />
        </div>
    )
}