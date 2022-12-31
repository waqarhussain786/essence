import NavLinks from "./navbarlinks";
import { AiOutlineMenu } from "react-icons/ai"
import { useState } from "react";
import {AiOutlineClose} from "react-icons/ai"

const MobileNavigation = () => {
    
    const [open, setOpen] = useState(false);
    const closeIcon=<AiOutlineClose className="hamburger" size= "30px" onClick={() => setOpen(!open)}/>
    const hamburgerIcon=<AiOutlineMenu className="hamburger" size= "30px" onClick={() => setOpen(!open)}/>
    return (
        <div id="mobile">
            {open ? closeIcon : hamburgerIcon}
            { open && <NavLinks /> }
        </div>
    );
    
}

export default MobileNavigation;