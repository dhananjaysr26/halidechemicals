import React from 'react'
import './Home.css';
import pic1 from "../assets/pic1.png"
function Home() {
    return (
        <div className="container">
          <div className="leftside">
              <img width="100%" src={pic1}/>
            </div>  
            <div className="rightside">
            </div>
        </div>
    )
}

export default Home
