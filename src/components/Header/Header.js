import React from 'react';
import {AiOutlineSearch} from "react-icons/ai"
import logo from "../../image/icons/image 109 (Traced).png"
import logo2 from "../../image/icons/image 108 (Traced).png"
import logo3 from "../../image/icons/image 111 (Traced).png"
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div id='header'>
            <div className="container">
                <div className="header">
                    <div className="left">
                        <Link to={'/'}>
                            <h1>MOTION SHOP</h1>
                        </Link>
                    </div>
                    <div className="around"><input type="text" placeholder="Я ищу ..."/><AiOutlineSearch className="iconch"/></div>
                    <div className="right">
                        <div className="block">
                            <img src={logo} alt=""/>
                            <span>FAQ</span>
                        </div>
                        <div className="block">
                            <Link className="block" to={"/ManPage"}>
                                <img src={logo2} alt=""/>
                                <span>О нас</span>
                            </Link>
                        </div>
                        <div className="block">
                            <img src={logo3} alt=""/>
                            <span>Корзина</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;