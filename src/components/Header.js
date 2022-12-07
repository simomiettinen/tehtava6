import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="main-header">
      <ul>
        <li>
          <Link to="/" className="headerlink-title">
            Urheilijat
          </Link>
        </li>
        <li>
          <Link to="add" className="headerlink-title">
            Lisaa
          </Link>
        </li>
        <li>
          <Link to="update" className="headerlink-title">
            Paivita
          </Link>
        </li>
        <li>
          <Link to="delete" className="headerlink-title">
            Poista
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
