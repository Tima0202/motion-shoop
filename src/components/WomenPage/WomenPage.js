import React from 'react';
import salam1 from "../../image/man.png"
import salam2 from "../../image/woman.png"
import salam3 from "../../image/girl.png"
import salam4 from "../../image/foot.png"
import womenClothes1 from "../../image/wom-img2.svg"
import womenClothes2 from "../../image/wom-img3.svg"
import womenClothes3 from "../../image/wom-img4.svg"
import womenClothes4 from "../../image/wom-img5.svg"

const WomenPage = () => {
    // script logic
    return (
        <div id="womenpage">
            <div className="container">
                <div className="womenpage">
                    <img src={salam1} alt=""/>
                    <img src={salam2} alt=""/>
                    <img src={salam3} alt=""/>
                    <img src={salam4} alt=""/>
                    <h1>Женская одежда</h1>
                </div>

                <div>
                    <img src={womenClothes1} alt=""/>
                    <h1 className="title">2100 сом</h1>
                    <img src={womenClothes2} alt=""/>
                    <img src={womenClothes3} alt=""/>
                    <img src={womenClothes4} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default WomenPage;