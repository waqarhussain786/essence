import React from "react";
import pic1 from "../img/img1.png"
import "./about.css"

function Aboutuss() {
    return <>
        <div className="about-container">
            <div className="about-page">
                <div className="about-content">
                    <h1 className="heading-black-color">About Us</h1>
                    <p className="para-black-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, fuga saepe incidunt commodi.</p>
                </div>
                <div className="about-boxes-container">
                    <div className="about-boxes">
                        <div className="about-box1">
                            <h1 className="about_heading">heading</h1>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.
                            </p>
                        </div>
                        <div className="about-box1">
                            <h1 className="about_heading">heading</h1>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.
                            </p>
                        </div>

                        <div className="about-box1">
                            <h1 className="about_heading">heading</h1>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.
                            </p>
                        </div>
                        <div className="about-box1">
                            <h1 className="about_heading">heading</h1>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.
                            </p>
                        </div>
                    </div>
                    <div className="about-content-img">
                        <img className="about_img" src={pic1} alt="" />
                    </div>
                </div>
                <div className="about-video">
                    <frame width="1350" height="315"
                        src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </frame>
                </div>
            </div>
        </div>
    </>

}
export default Aboutuss