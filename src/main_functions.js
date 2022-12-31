import NavBar from "./navBar/navbar";
import Home from "./home";
import Ourservice from "./services";
import Aboutuss from "./about/aboutus";
import OurWorks from "./works";
import Pricing from "./pricing";
import Team from "./team";
import Subscribe from "./subscribe";
import Blog from "./blog";
import Footer from "./footer";
// import GoogleMap from "./google-map";

function FirstApp() {
    return <>

        <NavBar />
        <Home />
        <Ourservice />
        <Aboutuss />
        <OurWorks />
        <Pricing />
        <Team />
        <Subscribe />
        <Blog />
        <Footer />
        {/* <GoogleMap /> */}

    </>
}

export default FirstApp;