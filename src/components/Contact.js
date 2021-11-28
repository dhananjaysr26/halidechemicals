import React from "react";
import a1 from "../assets/a1.png";
import a2 from "../assets/a2.png";
import "./Contact.css";
function Contact() {
  return (
    <>
      <div className="block">
        <div className="info-block">
          <span className="block-title">Contact US</span>
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
        </div>
        <div className="image-block">
          <img width="100%" src={a1} />
        </div>
      </div>
      <p className="direction-text">Click on the map to get Direction!</p >
        <div className="direction-block">
            <img className="direction-img" src={a2} />
          <div className="direction">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15071.948828347604!2d73.1847312!3d19.1957611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x84d40035445f2281!2sHalide%20Chemicals!5e0!3m2!1sen!2sin!4v1638082113151!5m2!1sen!2sin"></iframe>
          </div>
        </div>
  
    </>
  );
}

export default Contact;
