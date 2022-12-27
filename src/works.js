import works1 from "./img/work_img_1.png"
import works2 from "./img/work_img_2.png"
import works3 from "./img/work_img_3.png"
import works4 from "./img/work_img_4.png"
import works5 from "./img/work_img_5.png"
import works6 from "./img/work_img_6.png"
import "./works.css"
function OurWorks() {
    return <>
        <div className="work-page-container">
            <div className="work-page">
                <div className="work-page-heading">
                    <h1>OUR WORKS</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, fuga saepe incidunt commodi. </p>
                </div>
                <div className="work-page-boxes">
                    <div className="btns-container">
                        <button className="work_page_btns">All</button>
                        <button className="work_page_btns">DESING</button>
                        <button className="work_page_btns">DEVELOPMENT</button>
                        <button className="work_page_btns">PRINT</button>
                    </div>
                    <div className="work-page-box-container">
                        <div className="work-images">
                            <img className="work-img" src={works1} alt="" />
                            <img className="work-img" src={works2} alt="" />
                            <img className="work-img" src={works3} alt="" />
                        </div>
                        <div className="work-images">
                            <img className="work-img" src={works4} alt="" />
                            <img className="work-img" src={works5} alt="" />
                            <img className="work-img" src={works6} alt="" />
                        </div>
                    </div>
                </div>
                {/* 
                    <div className="work_page_box_container">
                        <box className="work_page_box4"></box>
                        <box className="work_page_box5"></box>
                        <box className="work_page_box6" ></box>
                    </div>
                 */}
            </div>
        </div>

    </>

}
export default OurWorks;