import React from 'react';
import photo from "../../image/man3.png"
import photo2 from "../../image/woman2.png"
import photo3 from "../../image/girl3.png"
import photo4 from "../../image/foot2.png"
import photo5 from "../../image/boy.png"
import photo6 from "../../image/boy2.png"
import photo7 from "../../image/man2.png"

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
                    <div className="select">
                        <img className="pats" src={photo5} alt="img"/>
                        <h1 className="cost">2100 сом</h1>
                        <h1 className="name">Джинсы момсы / банан</h1>
                    </div>
                    <div className="select">
                        <img className="pats" src={photo6} alt="img"/>
                        <h1 className="cost">670 сом</h1>
                        <h1 className="name">Футболка оверсайз / универсал</h1>
                    </div>
                    <div className="select">
                        <img className="pats" src={photo7} alt="img"/>
                        <h1 className="cost">2100 сом</h1>
                        <h1 className="name">Футболка/универсал</h1>
                    </div>
                    <div className="select">
                        <img className="pats" src={photo5} alt="img"/>
                        <h1 className="cost">2100 сом</h1>
                        <h1 className="name">Джинсы момсы / банан</h1>
                    </div>
                    <div className="select">
                        <img className="pats" src={photo6} alt="img"/>
                        <h1 className="cost">2100 сом</h1>
                        <h1 className="name">Футболка оверсайз / универсал</h1>
                    </div>
                    <div className="select">
                        <img className="pats" src={photo7} alt="img"/>
                        <h1 className="cost">2100 сом</h1>
                        <h1 className="name">Футболка/универсал</h1>
                    </div>
                    <div className="select">
                        <img className="pats" src={photo5} alt="img"/>
                        <h1 className="cost">2100 сом</h1>
                        <h1 className="name">Джинсы момсы / банан</h1>
                    </div>
                    <div className="select">
                        <img className="pats" src={photo6} alt="img"/>
                        <h1 className="cost">2100 сом</h1>
                        <h1 className="name">Футболка оверсайз / универсал</h1>
                    </div>
                    <div className="select">
                        <img className="pats" src={photo7} alt="img"/>
                        <h1 className="cost">670 сом</h1>
                        <h1 className="name">Футболка/универсал</h1>
                    </div>
                    <div className="select">
                        <img className="pats" src={photo5} alt="img"/>
                        <h1 className="cost">2100 сом</h1>
                        <h1 className="name">Джинсы момсы / банан</h1>
                    </div>
                    <div className="select">
                        <img className="pats" src={photo6} alt="img"/>
                        <h1 className="cost">2100 сом</h1>
                        <h1 className="name">Футболка оверсайз / универсал</h1>
                    </div>
                    <div className="select">
                        <img className="pats" src={photo7} alt="img"/>
                        <h1 className="cost">670 сом</h1>
                        <h1 className="name">Футболка/универсал</h1>
                    </div>
                    <div className="select">
                        <img className="pats" src={photo5} alt="img"/>
                        <h1 className="cost">2100 сом</h1>
                        <h1 className="name">Джинсы момсы / банан</h1>
                    </div>
                    <div className="select">
                        <img className="pats" src={photo6} alt="img"/>
                        <h1 className="cost">2100 сом</h1>
                        <h1 className="name">Футболка оверсайз / универсал</h1>
                    </div>
                    <div className="select">
                        <img className="pats" src={photo7} alt="img"/>
                        <h1 className="cost">670 сом</h1>
                        <h1 className="name">Футболка/универсал</h1>
                    </div>
                </div>
                <button className="btn">Показать ещё </button>
            </div>
        </div>
    );
};

export default ManPage;