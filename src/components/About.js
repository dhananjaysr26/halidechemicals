import React from 'react'
import pic1 from "../assets/pic1.png";

function About() {
    return (
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
        </div>
        <div className="image-block">
          <img width="100%" src={pic1} />
        </div>
      </div>
    )
}

export default About
