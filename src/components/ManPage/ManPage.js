import React from 'react';
import photo from "../../image/m.png"
import photo2 from "../../image/w.png"
import photo3 from "../../image/gg.png"
import photo4 from "../../image/f.png"

import photo6 from "../../image/niger.webp"
import photo7 from "../../image/green2.webp"
import photo8 from "../../image/black2.webp"
import photo9 from "../../image/we.webp"
import photo10 from "../../image/bee.webp"
import photo11 from "../../image/blue4.webp"
import photo12 from "../../image/page.webp"
import photo13 from "../../image/see.webp"
import photo14 from "../../image/no.webp"
import photo15 from "../../image/orange.webp"
import photo16 from "../../image/aqua.webp"
import photo17 from "../../image/pants4.webp"
import photo18 from "../../image/bb.webp"


const ManPage = () => {
    return (
        <div id='manpage'>
            <div className="container">
                <div className="manpage">
                    <div className="photo">
                        <img className="man" src={photo} alt="img"/>
                        <img className="man" src={photo2} alt="img"/>
                        <img className="man" src={photo3} alt="img"/>
                        <img className="man" src={photo4} alt="img"/>
                    </div>
                    <h1 className="boy">Мужская одежда</h1>
                </div>
                <div className="show">
                    <div className="block">
                        <div className="select">
                            <img className="pats" src={photo13} alt="img"/>
                            <h1 className="cost">2100 сом</h1>
                            <h1 className="name">Футболка оверсайз / универсал</h1>
                        </div>
                        <div className="select">
                            <img className="pats" src={photo14} alt="img"/>
                            <h1 className="cost">670 сом</h1>
                            <h1 className="name">Футболка оверсайз / универсал</h1>
                        </div>
                        <div className="select">
                            <img className="pats" src={photo12} alt="img"/>
                            <h1 className="cost">2100 сом</h1>
                            <h1 className="name">Футболка/универсал</h1>
                        </div>
                        <div className="select">
                            <img className="pats" src={photo9} alt="img"/>
                            <h1 className="cost">2100 сом</h1>
                            <h1 className="name">Джинсы момсы / банан</h1>
                        </div>
                        <div className="select">
                            <img className="pats" src={photo10} alt="img"/>
                            <h1 className="cost">2100 сом</h1>
                            <h1 className="name">Футболка оверсайз / универсал</h1>
                        </div>

                    </div>
                    <div className="block">
                        <div className="select">
                            <img className="pats" src={photo11} alt="img"/>
                            <h1 className="cost">2100 сом</h1>
                            <h1 className="name">Футболка/универсал</h1>
                        </div>
                        <div className="select">
                            <img className="pats" src={photo12} alt="img"/>
                            <h1 className="cost">2100 сом</h1>
                            <h1 className="name">Джинсы момсы / банан</h1>
                        </div>
                        <div className="select">
                            <img className="pats" src={photo13} alt="img"/>
                            <h1 className="cost">2100 сом</h1>
                            <h1 className="name">Футболка оверсайз / универсал</h1>
                        </div>
                        <div className="select">
                            <img className="pats" src={photo14} alt="img"/>
                            <h1 className="cost">670 сом</h1>
                            <h1 className="name">Футболка/универсал</h1>
                        </div>
                        <div className="select">
                            <img className="pats" src={photo15} alt="img"/>
                            <h1 className="cost">2100 сом</h1>
                            <h1 className="name">Джинсы момсы / банан</h1>
                        </div>
                    </div>
                    <div className="block">
                        <div className="select">
                            <img className="pats" src={photo16} alt="img"/>
                            <h1 className="cost">2100 сом</h1>
                            <h1 className="name">Футболка оверсайз / универсал</h1>
                        </div>
                        <div className="select">
                            <img className="pats" src={photo17} alt="img"/>
                            <h1 className="cost">670 сом</h1>
                            <h1 className="name">Футболка/универсал</h1>
                        </div>
                        <div className="select">
                            <img className="pats" src={photo18} alt="img"/>
                            <h1 className="cost">2100 сом</h1>
                            <h1 className="name">Джинсы момсы / банан</h1>
                        </div>
                        <div className="select">
                            <img className="pats" src={photo16} alt="img"/>
                            <h1 className="cost">2100 сом</h1>
                            <h1 className="name">Футболка оверсайз / универсал</h1>
                        </div>
                        <div className="select">
                            <img className="pats" src={photo9} alt="img"/>
                            <h1 className="cost">670 сом</h1>
                            <h1 className="name">Футболка/универсал</h1>
                        </div>
                    </div>

                </div>
                <button className="btn">Показать ещё &#8595;    </button>
            </div>
        </div>
    );
};

export default ManPage;