import React from "react";
import "./Navbar.css";

function Navbar({ cast, onChoice }) {
  return (
    <nav className="navigation">
      Navbar
      <ul>
        
          {cast.map(cast => (
                <li key={cast.id}>
                    <a href="#" onClick={() => { onChoice(cast) }}>
                    {cast.name}</a>
                </li>
            ))
          }
        
      </ul>
    </nav>
  );
}

export default Navbar;
