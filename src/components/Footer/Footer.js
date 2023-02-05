import React from 'react';
import {AiOutlineInstagram} from "react-icons/ai"
import {AiOutlineFacebook} from "react-icons/ai"
import {AiOutlineWhatsApp} from "react-icons/ai"
import {FaTelegramPlane} from "react-icons/fa"

const Footer = () => {
    return (
        <div id="footer">
            <div className="container">
                <div className="footer">
                    <div className="up">
                        <div className="left">
                            <h1>MOTION SHOP</h1>
                        </div>
                        <div className="around">
                            <div className="block">
                                <a href="#">Женщинам</a>
                                <a href="#">Мужчинам</a>
                                <a href="#">Детям</a>
                            </div>
                            <div className="block">
                                <a href="#">Обувь</a>
                                <a href="#">FAQ</a>
                                <a href="#">О нас</a>
                            </div>
                            <div className="block-num">
                                <span>Связаться с нами:</span>
                                <a href="#">+996 222 533 735</a>
                                <a href="#">+996 222 533 735</a>
                                <a href="#">+996 222 533 735</a>
                                <div className="footer-icons">
                                    <AiOutlineInstagram className="footer-ic"/>
                                    <FaTelegramPlane className="footer-ic"/>
                                    <AiOutlineWhatsApp className="footer-ic"/>
                                    <AiOutlineFacebook className="footer-ic"/>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <h5>Адрес</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur <br/> adipisicing elit. Ad aperiam <br/> architecto beatae doloremque <br/> et explicabo libero magni quam <br/> quasi vel.</p>
                        </div>
                    </div>
                    <div className="down">
                        <h5 style={{textAlign:'center', paddingTop:'18px', color:'white'}}>Motion-Shop - все права защищены</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;