import React from 'react';
import myImage from './landm.png';
import { NavLink } from "react-router-dom";
import './home.css';
import Footer from './footer';

function Home() {
    return (
        <div>
            <div className="textbox">
                <h1 className='welcome'>WELCOME</h1>
                <p>
                    We enable thousands of Kenyans to become property owners in
                    strategic and accessible areas in the larger Nairobi
                    metropolis area, and in satellite towns of Thika, Juja,
                    Nakuru and Muranga. Our properties are well serviced with
                    amenities such as electricity, water, access roads and
                    social facilities like hospitals, schools and local
                    government offices

                    Don't miss out on this amazing opportunity to own a piece of land in one of the most sought-after areas in Kenya. 
                    Browse our selection today and find your dream home. 
                    Our dedicated team is here to answer any questions you may have and guide you through the buying process. 
                    So why wait? Invest in your future and secure your piece of paradise today.

                    This is Vasco Real Estate, Where Dreams Come Home.
                
                </p>
                <div className="imgbox">
                    <img src={myImage} alt="landm" />


                  <NavLink className="plotb" to="/Properties">CURRENT PLOTS AVAILABLE</NavLink>


                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
