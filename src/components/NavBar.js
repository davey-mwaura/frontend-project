import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "./Logo";

function NavBar() {
  return <div>


<header className="navigate">

  <Logo />

  <nav>
    <ul className="nav__links"> 
    <li className="branch"><NavLink to="/">Home</NavLink></li>
    <li className="branch"><NavLink to="/Properties">Properties</NavLink></li>
    <li className="branch"><NavLink to="/About">Find Us</NavLink></li>
    </ul>
  </nav>

  <a className="caller" href="tel:0720855454"><button className="call">Contact us</button></a>

</header>              

</div>;
}

export default NavBar;
