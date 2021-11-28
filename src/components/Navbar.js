import React,{useState} from "react";
import "./Navbar.css";
import { MdOutlineMenu } from "react-icons/md";
import { AiOutlineCloseSquare } from "react-icons/ai";
import {Link,useHistory} from 'react-router-dom';

function Navbar() {
    let history = useHistory();
    const [isMenu,setIsMenu]=useState(false);
    return (
        <>
<nav className="main-nav">
    <div className="logo">
        <h2 >
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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/business">Business</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
        </ul>


    </div>
    <div >
        <button className="mobile-menu-icon" onClick={()=>isMenu?setIsMenu(false):setIsMenu(true)}>
          {isMenu?(<AiOutlineCloseSquare/>):(<MdOutlineMenu/>)}
        </button>
    </div>

</nav>
<div className={isMenu?"mobile-menu":"mobile-menu-close"}>
<button className="mobile-menu-icon" onClick={()=>isMenu?setIsMenu(false):setIsMenu(true)}>
          {isMenu?(<AiOutlineCloseSquare/>):(<MdOutlineMenu/>)}
        </button>
<ul  onClick={()=>setIsMenu(false)}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/business">Business</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
        </ul>
    </div>
</>
    )
}

export default Navbar
