import "./subscriber.css"
import {HiSpeakerphone} from "react-icons/hi"

function Subscribe() {
    return <>
        <div className="subscribe-container">

            <div className="subscribe-boxes-container">
                <div className="subscribe-container-box1">
                    <h1>
                        Subscribe to Newsletter
                    </h1>
                    <p>
                        Weekly Freebies and More!
                    </p>
                    <input type="text" name="email" placeholder="name" />
                    <input type="email" name="email" placeholder="email" />
                    <input type="phone" name="email" placeholder="phone" />
                    <button className="subscribe-btn">SUBSCRIBE NOW</button>

                </div>
                <div className="subscribe-container-box2">
                    <div className="weekly-free-container">
                        <HiSpeakerphone/>
                        <h1 >
                            Weekly Free Learning Materials
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, laborum libero beatae obcaecati.
                        </p>
                    </div>
                    <div className="weekly-free-container">
                        <HiSpeakerphone/>

                        <h1>
                            Free PDF to Get Started
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, laborum libero beatae obcaecati.
                        </p>
                    </div>
                    <div className="weekly-free-container">

                        <HiSpeakerphone/>
                        <h1>
                            10% Instant Discount
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, laborum libero beatae obcaecati.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </>

}
export default Subscribe;