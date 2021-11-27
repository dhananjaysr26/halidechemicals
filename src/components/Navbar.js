import React,{useState} from "react";
import "./Navbar.css";
import { MdOutlineMenu } from "react-icons/md";
import { AiOutlineCloseSquare } from "react-icons/ai";

function Navbar() {
    const [isMobile,setIsMobile]=useState(false);
    return (
<nav className="main-nav">

    <div className="logo">
        <h2>
            <span>H</span>alide
            <span>C</span>hemicals
        </h2>
        <div className="headline">
            <p>Mumbai's Best Chemical Company with Best World Class Product!</p>
            <button className="headline-btn">Explore</button>
        </div>
    </div>
    <div className="menu-link">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Company</a></li>
            <li><a href="#">Business</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact us</a></li>
        </ul>


    </div>
    <div >
        <button className="mobile-menu-icon" onClick={()=>isMobile?setIsMobile(false):setIsMobile(true)}>
          {isMobile?(<AiOutlineCloseSquare/>):(<MdOutlineMenu/>)}
        </button>
    </div>

</nav>
    )
}

export default Navbar
