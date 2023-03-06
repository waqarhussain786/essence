import React from "react";
import "./team.css"
import team1 from "./img/team1.png";
import team2 from "./img/team2.png";
import team3 from "./img/team3.png";
import team4 from "./img/team4.png";
import {FaFacebookF} from "react-icons/fa"
import {BsTwitter} from "react-icons/bs"
import {AiOutlineInstagram} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
function Team() {
    return(

    <>
        <div className="team-page-container">
            <div className="team-page-heading">
                <h1>OUR TEAM</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos debitis.</p>
                <div className="team-members">
                    <div className="member-profile1">
                        <img className="team1" src={team1} alt="" />
                        <div className="member-name">Jhon Doe</div>
                        <div className="member-detail">Chief Technical Officer</div>
                        <div className = "team-icons">
                        <FaFacebookF />
                        <BsTwitter />
                        <AiOutlineInstagram />
                        <AiFillLinkedin />
                        </div>
                    </div>
                    <div className="member-profile1">
                        <img className="team1" src={team2} alt="" />
                        <div className="member-name">Jhon Doe</div>
                        <div className="member-detail">Chief Technical Officer</div>
                        <div className = "team-icons">
                        <FaFacebookF />
                        <BsTwitter />
                        <AiOutlineInstagram />
                        <AiFillLinkedin />
                        </div>
                    </div>
                    <div className="member-profile1">
                        <img className="team1" src={team3} alt="" />
                        <div className="member-name">Jhon Doe</div>
                        <div className="member-detail">Chief Technical Officer</div>
                        <div className = "team-icons">
                        <FaFacebookF />
                        <BsTwitter />
                        <AiOutlineInstagram />
                        <AiFillLinkedin />
                        </div>
                    </div>
                    <div className="member-profile1">
                        <img className="team1" src={team4} alt="" />
                        <div className="member-name">Jhon Doe</div>
                        <div className="member-detail">Chief Technical Officer</div>
                        <div className = "team-icons">
                        <FaFacebookF />
                        <BsTwitter />
                        <AiOutlineInstagram />
                        <AiFillLinkedin />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
    ) 
}
export default Team;