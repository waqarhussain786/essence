import "./blog.css"
import blogimg1 from "./img/blog1.jpg";
import blogimg2 from "./img/blog2.jpg";
import blogimg3 from "./img/blog3.jpg";
import sponser1 from "./img/sponser1.png";
import sponser2 from "./img/sponser2.png";
import sponser3 from "./img/sponser3.png";
import sponser4 from "./img/sponser4.png";
import sponser5 from "./img/sponser5.png";
import React from "react";

function Blog() {

    return <>
        <div className="blog-container">
            <h1 className="blog-heading">BLOGS</h1>
            <p className="blog-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, fuga saepe incidunt commodi.</p>
            <div className="blog-boxes-container">
                <div className="blog-box-1">
                    <img className="blog-img1" src={blogimg1} alt="blogphoto" />
                    <div className="box1-date">
                        <h5>18/03/2022</h5>
                    </div>
                    <div className="box1-heading">
                        <h4>10 Tips to Design a High-converting Landing Page</h4>
                    </div>
                    <div className="box1-feedback">
                        <h6>4.5k Views</h6>
                    </div>
                </div>
                <div className="blog-box-2">
                    <img className="blog-img-2" src={blogimg2} alt="blogphoto" />
                    <div className="box2-date">
                        <h5>18/03/2022</h5>
                    </div>
                    <div className="box2-heading">
                        <h4>How to Design a Website For Your App</h4>
                    </div>
                    <div className="box2-feedback">
                        <h6>4.5k Views</h6>
                    </div>
                </div>

                <div className="blog-box-3">
                    <img className="blog-img-3" src={blogimg3} alt="blogphoto" />
                    <div className="box3-date">
                        <h5>18/03/2022</h5>
                    </div>
                    <div className="box3-heading">
                        <h4>7 Secretes to Optimize Loading Speed of Your Site</h4>
                    </div>
                    <div className="box3-feedback">
                        <h6>4.5k Views</h6>
                    </div>
                </div>
            </div>
            <div className="blog-sponsor">
                <div className="blog-sponser-imgs">
                    <img className="sponser-1" src={sponser1} alt="sponser" />
                    <img className="sponser-1" src={sponser2} alt="sponser" />
                    <img className="sponser-1" src={sponser3} alt="sponser" />
                    <img className="sponser-1" src={sponser4} alt="sponser" />
                    <img className="sponser-1" src={sponser5} alt="sponser" />
                </div>
            </div>
            <div className="blog-intouch-container">
                <h1 className="blog-heading">GET IN TOUCH</h1>
                <p className="blog-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, fuga saepe incidunt commodi.</p>
                <div className="name-email1">
                    <div className="name-email">
                        <input type="text" name="name" placeholder="Your Name" />
                        <input type="email" name="email" placeholder="Your Email" />
                    </div>
                </div>
                <div className="subject-message">
                    <input className="input-message" type="text" name="email" placeholder="Subject" />
                    <textarea className="message-box" placeholder="Your Message" rows="8" />
                    <h5>Write Your Message</h5>
                    <div className="btn-box">
                        <button className="btn" >SEND MESSAGE</button>
                    </div>
                </div>
            </div>
        </div>
    </>

}
export default Blog;