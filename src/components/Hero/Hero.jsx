import React from "react";
import "./Hero.css";
import Pro_Img from "../../assets/image/profile-img.png";
import Ico_Anaconda from "../../assets/image/ico/Anaconda-Dark.svg";
import Ico_Bootstrap from "../../assets/image/ico/Bootstrap.svg";
import Ico_C from "../../assets/image/ico/C.svg";
import Ico_CPP from "../../assets/image/ico/CPP.svg";
import Ico_CSS from "../../assets/image/ico/CSS.svg";
import Ico_ExpressJS_Dark from "../../assets/image/ico/ExpressJS-Dark.svg";
import Ico_Github_Dark from "../../assets/image/ico/Github-Dark.svg";
import Ico_Git from "../../assets/image/ico/Git.svg";
import Ico_HTML from "../../assets/image/ico/HTML.svg";
import Ico_JavaScript from "../../assets/image/ico/JavaScript.svg";
import Ico_Linux_Dark from "../../assets/image/ico/Linux-Dark.svg";
import Ico_MaterialUI_Dark from "../../assets/image/ico/MaterialUI-Dark.svg";
import Ico_MongoDB from "../../assets/image/ico/MongoDB.svg";
import Ico_MySQL_Light from "../../assets/image/ico/MySQL-Light.svg";
import Ico_NodeJS_Dark from "../../assets/image/ico/NodeJS-Dark.svg";
import Ico_React_Dark from "../../assets/image/ico/React-Dark.svg";
import Ico_Redux from "../../assets/image/ico/Redux.svg";
import Ico_TailwindCSS_Dark from "../../assets/image/ico/TailwindCSS-Dark.svg";

export default function Hero() {
    return (
        <section className="hero-container">
            <div className="hero-content">
                <h2>Buiding Digital Experiences That Inspire</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eum
                    nostrum optio aliquam voluptatibus nisi quae sint, expedita
                    consectetur vel praesentium laudantium voluptate exercitationem nemo
                    ut? Quaerat quibusdam harum pariatur? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Vero eum nostrum optio aliquam
                    voluptatibus nisi quae sint, expedita consectetur vel praesentium
                    laudantium voluptate exercitationem nemo ut? Quaerat quibusdam harum
                    pariatur?
                </p>
            </div>

            <div className="hero-img">
                <div>
                    <div className="tech-icon">
                        <img src={Ico_Anaconda} alt="tech-icon" />
                    </div>
                    <img className="profile-img" src={Pro_Img} alt="p-img" />
                </div>



                <div>
                    <div className=" tech-icon">
                        <img src={Ico_C} alt="tech-icon" />
                    </div>

                    <div className=" tech-icon">
                        <img src={Ico_CPP} alt="tech-icon" />
                    </div>
                    <div className=" tech-icon">
                        <img src={Ico_HTML} alt="tech-icon" />
                    </div>
                    <div className=" tech-icon">
                        <img src={Ico_CSS} alt="tech-icon" />
                    </div>
                    <div className=" tech-icon">
                        <img src={Ico_JavaScript} alt="tech-icon" />
                    </div>
                    <div className=" tech-icon">
                        <img src={Ico_NodeJS_Dark} alt="tech-icon" />
                    </div>
                </div>

                <div>
                    <div className=" tech-icon">
                        <img src={Ico_ExpressJS_Dark} alt="tech-icon" />
                    </div>
                    <div className=" tech-icon">
                        <img src={Ico_Bootstrap} alt="tech-icon" />
                    </div>
                    <div className=" tech-icon">
                        <img src={Ico_MaterialUI_Dark} alt="tech-icon" />
                    </div>
                    <div className=" tech-icon">
                        <img src={Ico_TailwindCSS_Dark} alt="tech-icon" />
                    </div>
                    <div className=" tech-icon">
                        <img src={Ico_React_Dark} alt="tech-icon" />
                    </div>
                    <div className=" tech-icon">
                        <img src={Ico_Redux} alt="tech-icon" />
                    </div>
                </div>
                <div>
                    <div className=" tech-icon">
                        <img src={Ico_Git} alt="tech-icon" />
                    </div>
                    <div className=" tech-icon">
                        <img src={Ico_Github_Dark} alt="tech-icon" />
                    </div>
                    <div className=" tech-icon">
                        <img src={Ico_Linux_Dark} alt="tech-icon" />
                    </div>
                    <div className=" tech-icon">
                        <img src={Ico_MongoDB} alt="tech-icon" />

                    </div>
                    <div className=" tech-icon">
                        <img src={Ico_MySQL_Light} alt="tech-icon" />
                    </div>
                </div>
            </div>
        </section >
    );
}
