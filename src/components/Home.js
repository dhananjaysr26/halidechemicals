import React from "react";
import "./Home.css";

import pic1 from "../assets/pic1.png";
import g1 from "../assets/icons8-product-unscreen.gif";
import g2 from "../assets/icons8-customer-insight.gif";
import g3 from "../assets/icons8-teamwork.gif";
import g4 from "../assets/icons8-robot.gif";
import p1 from "../assets/p1.gif";
import p2 from "../assets/p2.gif";
import p3 from "../assets/p3.gif";
import p4 from "../assets/p4.gif";
import p5 from "../assets/p5.gif";
import p6 from "../assets/p6.gif";

function Home() {
  return (
    <div className="container">
      <div className="block">
        <div className="info-block">
          <span className="block-title">SUSTAINABILITY</span>
          <p>
            Aarti Industries Limited (AIL) is a leading Indian manufacturer of
            speciality chemicals and pharmaceuticals with a global footprint. We
            combine process chemistry competence (recipe focus) with a scale-up
            engineering competence (asset utilisation) for creating a
            sustainable future. cturing of pharmaceuticals, agrochemicals,
            polymers, additives, surfactants, pigments and dyes.Aarti Industries
            Limited (AIL) takes a holistic approach towards sustainability. We
            optimise the use of available resources, such as raw materials,
            utilities and human resources to minimise our environmental
            footprint.
          </p>
          <button className="read-btn">Read More</button>
        </div>
        <div className="image-block">
          <img width="100%" src={pic1} />
        </div>
      </div>

      <div className="block">
        <div className="info-block">
          <span className="block-title">ABOUT US</span>
          <p>
            Aarti Industries Limited (AIL) is a leading Indian manufacturer of
            speciality chemicals and pharmaceuticals with a global footprint. We
            combine process chemistry competence (recipe focus) with a scale-up
            engineering competence (asset utilisation) for creating a
            sustainable future. cturing of pharmaceuticals, agrochemicals,
            polymers, additives, surfactants, pigments and dyes.Aarti Industries
            Limited (AIL) takes a holistic approach towards sustainability. We
            optimise the use of available resources, such as raw materials,
            utilities and human resources to minimise our environmental
            footprint.
          </p>
          <button className="read-btn">Read More</button>
        </div>
        <div className="image-block">
          <img width="100%" src={pic1} />
        </div>
      </div>

      <div className="number-block">
        <div className="number-card">
          <img height="70px" src={g1} />
          <h1>200+</h1>
          <p>Products</p>
        </div>

        <div className="number-card">
          <img height="70px" src={g2} />
          <h1>100+</h1>
          <p>Customers</p>
        </div>

        <div className="number-card">
          <img height="70px" src={g3} />
          <h1>700+</h1>
          <p>Employees</p>
        </div>

        <div className="number-card">
          <img height="70px" src={g4} />
          <h1>2</h1>
          <p>Manufacturing Plants</p>
        </div>
      </div>
      <h1 className="product-headline">Our Product used in !</h1>
      <div className="product-block">
        <div className="product">
          <img height="50px" width="50px" src={p1} />
          <p>car color</p>
        </div>

        <div className="product">
          <img height="50px" width="50px" src={p2} />
          <p>paint</p>
        </div>
        <div className="product">
          <img height="50px" width="50px" src={p4} />
          <p>shampoo</p>
        </div>
        <div className="product">
          <img height="50px" width="50px" src={p3} />
          <p>medicine</p>
        </div>
        <div className="product">
          <img height="50px" width="50px" src={p5} />
          <p>toolkit</p>
        </div>
        <div className="product">
          <img height="50px" width="50px" src={p6} />
          <p>aeroplane</p>
        </div>
      </div>
      <div className="mission-block">
          <div className="mission-sub-block">
            <h1>~Mission~</h1>
            <p>At Aarti Industries, our purpose has been to create value and improve lives through sustainable and responsible chemistry — with a vision to emerge as a ‘Global Partner of Choice’ to leading consumers of specialty chemicals and intermediates.</p>
          <button className="btn">Read More</button>
          </div>
      </div>
    </div>
  );
}

export default Home;
