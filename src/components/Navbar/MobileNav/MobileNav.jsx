import React from "react";
import "./MobileNav.css";

export default function MobileNav({ isOpen, toggleMenu }) {
    return (
        <>
            <div
                onClick={toggleMenu}
                className={`mobile-menu ${isOpen ? "active" : ""}`}>
                <div className="mobile-menu-container">
                    <p className="logo"><i><b>Nikhil</b></i></p>
                    <ul>
                        <li>
                            <a className="menu-item">Home</a>
                        </li>
                        <li>
                            <a className="menu-item">Skills</a>
                        </li>
                        <li>
                            <a className="menu-item">Projects</a>
                        </li>
                        <li>
                            <a className="menu-item">Contact Me</a>
                        </li>

                        <button className="contact-btn" onClick={() => { }}>
                            Hire Me
                        </button>
                    </ul>


                </div>
            </div>
        </>
    );
}
