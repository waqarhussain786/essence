import "./pricing.css"
import profile1 from "./img/profile1.jpg"
import profile2 from "./img/profile2.jpg"
import { ImRocket } from "react-icons/im"
import { BsCupFill } from "react-icons/bs"
import { FaRegClipboard } from "react-icons/fa"
import { BiHeart } from "react-icons/bi"
function Pricing() {

    return <>

        <div className="price-page-container">
            <div className="price-container-heading">
                <h1>PRICING PLANS</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, fuga saepe incidunt commodi. </p>
                <div className="price-boxes">
                    <div className="price-box1">
                        <h3 className="price-padding">Starter Plan</h3>
                        <h3 className="price-padding">$</h3>
                        <hr />
                        <h3 className="price-padding">Consectetur adipiscing</h3>
                        <h3 className="price-padding light-background">Nunc luctus nulla et tellus</h3>
                        <h3 className="price-padding">Suspendisse quis metus</h3>
                        <h3 className="price-padding light-background">Vestibul varius fermentum erat</h3>
                        <h3 className="price-padding">-</h3>
                        <button className="price-btn">GET PLAN</button>
                    </div>
                    <div className="price-center-box">
                        <h3 className="price-padding">Popular Plan</h3>
                        <h3 className="price-padding">$</h3>
                        <hr />
                        <h3 className="price-padding">Consectetur adipiscing</h3>
                        <h3 className="price-padding light-background">Nunc luctus nulla et tellus</h3>
                        <h3 className="price-padding">Suspendisse quis metus</h3>
                        <h3 className="price-padding light-background">Vestibul varius fermentum erat</h3>
                        <h3 className="price-padding">-</h3>
                        <button className="price-btn">BUY NOW</button>
                    </div>
                    <div className="price-box1">
                        <h3 className="price-padding">Premium Plan Plan</h3>
                        <h3 className="price-padding">$</h3>
                        <hr />
                        <h3 className="price-padding">Consectetur adipiscing</h3>
                        <h3 className="price-padding light-background">Nunc luctus nulla et tellus</h3>
                        <h3 className="price-padding">Suspendisse quis metus</h3>
                        <h3 className="price-padding light-background">Vestibul varius fermentum erat</h3>
                        <h3 className="price-padding">Suspendisse quis metus</h3>
                        <button className="price-btn ">BUY NOW</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="price-page-container2">
            <div className="price-page-container2-box">
                <div className="price-page-box1">
                    <div className="faster">
                        <i className="icon">
                            <ImRocket />
                        </i>
                        <h2>100%</h2>
                        <h4>Faster</h4>
                    </div>
                </div>
                <div className="price-page-box1">

                    <div className="faster">
                        <i className="icon">
                            <BsCupFill />
                        </i>
                        <h2>700</h2>
                        <h4>Cup of Coffee</h4>
                    </div>
                </div>
                <div className="price-page-box1">

                    <div className="faster">
                        <i className="icon">
                            <FaRegClipboard />
                        </i>
                        <h2>1000+</h2>
                        <h4>Active Clients</h4>
                    </div>
                </div>
                <div className="price-page-box1">
                    <div className="faster">
                        <i className="icon">
                            <BiHeart />
                        </i>
                        <h2>100%</h2>
                        <h4>Peoples Love</h4>
                    </div>

                </div>
            </div>
        </div>
        

        <div className="profile-boxes">

            <div className="price-page-container3">
                <div className="price-container3-profile1">
                    <div className="profile-img">
                        <img src={profile1} alt="img" />
                    </div>
                    <div className="profile-info">
                        <div className="profile-name">
                            <div className="profile-name">Johnathan Doe</div>
                        </div>
                        <div className="profile-status">
                            <div className="profile-name">Marketing Head Matrix media</div>
                        </div>
                    </div>
                </div>
                <div className="final">
                    <div class="content-inner">
                        <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quidem,
                            excepturi facere magnam illum, at accusantium doloremque odio.</p>
                    </div>
                </div>
            </div>
            <div className="price-page-container3">
                <div className="price-container3-profile1">
                    <div className="profile-img">
                        <img src={profile2} alt="img" />
                    </div>
                    <div className="profile-info">
                        <div className="profile-name">
                            <div className="profile-name">Johnathan Doe</div>
                        </div>
                        <div className="profile-status">
                            <div className="profile-name">Marketing Head Matrix media</div>
                        </div>
                    </div>
                </div>
                <div className="final">
                    <div class="content-inner">
                        <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quidem,
                            excepturi facere magnam illum, at accusantium doloremque odio.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="price-page-last-container">
            <div className="container-contant">
                <h2>Stil confused? Download a free lite version to get started!</h2>
                <button className="btn1">DOWNLOAD</button>
            </div>
        </div>

    </>
}
export default Pricing;