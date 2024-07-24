import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function NavBar(){
    return(
        <div className="nav-bar">
        <nav>
            <h2>WeHelp</h2>
            <ul>
                <li>
                    <Link to="/" className="active">Home</Link>
                </li>
                <li>
                    <Link to="/">Services</Link>
                </li>
                <li>
                    <Link to="/">Register</Link>
                </li>
                <li>
                    <Link to="/">About us</Link>
                </li>
            </ul>
         </nav>
        </div>

    );
}