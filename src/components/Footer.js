import React from 'react'
import "./Footer.css"

import { BsFacebook} from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { AiFillLinkedin,AiFillTwitterCircle } from "react-icons/ai";
function Footer() {
    return (
        <>
        <footer className="foot">
          <div className="foot-link">
            <ul>
                <li><a>Company</a></li>
                <li><a>Business</a></li>
                <li><a>Product</a></li>
                <li><a>RD</a></li>
            </ul>
          </div>
          <div className="foot-link">
          <ul>
                <li><a>ustainability</a></li>
                <li><a>Investor</a></li>
                <li><a>Carrers</a></li>
                <li><a>Contact Us</a></li>
            </ul>
          </div>
          <div className="social">
          <ul>
                <li><BsFacebook/></li>
                <li><FaInstagram/></li>
                <li><AiFillLinkedin/></li>
                <li><AiFillTwitterCircle/></li>
            </ul>
          </div>
          <div className="office">
              <h1>Office</h1>
<p>Plot No.44, MIDC Rd, Morivali, Ambernath, Maharashtra 421501</p>
          </div>
        </footer>
        <section className="footer">
            <p> Ⓒ 2021 | Halide Chemicals pvt ltd</p>
        </section>
        </>
    )
}

export default Footer
