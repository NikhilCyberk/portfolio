import React from "react";
import "./MobileNav.css";

export default function MobileNav({ isOpen, toggleMenu }) {
    return (
        <>
            <div
                onClick={toggleMenu}
                className={`mobile-menu ${isOpen ? "active" : ""}`}>
                <div className="mobile-menu-container">
                    <p className="logo-m"><i><b>Nikhil</b></i></p>
                    <ul>
                        <li>
                            <a className="menu-item-m">Home</a>
                        </li>
                        <li>
                            <a className="menu-item-m">Skills</a>
                        </li>
                        <li>
                            <a className="menu-item-m">Projects</a>
                        </li>
                        <li>
                            <a className="menu-item-m">Contact Me</a>
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
