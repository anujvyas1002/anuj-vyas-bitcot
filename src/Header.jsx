import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/building">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/gallery">Gallery</Link>
                    </li>
                   
                </ul>
                </div>
            </div>
        </nav>
                 
    </div >
  );
};
export default Header;
