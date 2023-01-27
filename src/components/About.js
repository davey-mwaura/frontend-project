import React from "react";
import Footer from "./footer";
import './map.css';

const styles = {
    border: '0',
    width: '870.4px',
    height: '400px'
  };
  
  function About()  {
      return (
          <div>
              <div >
            <h1 className="maptitle">Visit us today and discover your dream</h1>
                  
              </div>
              <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.159682068103!2d37.06958871475376!3d-1.041095399240567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4f59f0b94843%3A0x815b7da0c84e59b7!2sVasco%20Real%20Estate!5e0!3m2!1sen!2ske!4v1674779298800!5m2!1sen!2ske" style={styles} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Interactive map of Vasco Real Estate properties"></iframe>
              <Footer />
          </div>
      );
  }
  

  export default About;