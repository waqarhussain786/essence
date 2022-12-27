import "./navbar.css"
import { RiLightbulbLine } from "react-icons/ri"
import Navigatiion from "./navbar1";
import MobileNavigation from "./mobilemenu";


function Navbar() {
    return <>
        <div className="nav-conatainer">
            <div id="logo" ><RiLightbulbLine />ESSENCE</div>
            <div className="nav-list">
                <Navigatiion />
                <MobileNavigation />
            </div>
        </div>

    </>
}

export default Navbar;