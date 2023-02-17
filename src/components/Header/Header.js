import React, {useState} from 'react';
import {AiOutlineSearch} from "react-icons/ai"
import logo from "../../image/icons/image 109 (Traced).png"
import logo2 from "../../image/icons/image 108 (Traced).png"
import logo3 from "../../image/icons/image 111 (Traced).png"
import logo4 from "../../image/icons/image 112 (Traced).png"
import logo5 from "../../image/icons/Vector (2).png"
import {Link} from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi";
import BurgerMenu from "../navbar/BurgerMenu";



const Header = () => {
    const [burger, setBurger] = useState(false)

    const burgerOpen = () =>{
        setBurger(true)
    }

    return (
        <div id='header'>
            <div className="container">
                <div className="header">
                    <div className="left">
                            <GiHamburgerMenu className='burger_menu' onClick={()=> burgerOpen()} style={{color:"#D118A8", fontSize:'65px'}}/>

                        <Link to={'/'}>
                            <h1>MOTION SHOP</h1>
                            <h2>MOTION</h2>
                            <h5>SHOP</h5>
                        </Link>
                        <img className="img-media" src={logo4} alt=""/>
                        <img className="img-media1" src={logo5} alt=""/>
                    </div>
                    <BurgerMenu burger={burger}/>
                    <div className="around"><input type="text" placeholder="Я ищу ..."/><AiOutlineSearch
                        className="iconch"/></div>
                    <div className="right">
                        <div className="block">
                            <Link to={'/faq'} className='block'>
                                <img src={logo} alt=""/>
                                <span>FAQ</span>
                            </Link>
                        </div>
                        <div className="block">
                            <Link className='block' to={'/info'}>
                                <img src={logo2} alt=""/>
                                <span>О нас</span>
                            </Link>
                        </div>
                        <div className="block">
                            <Link className='block' to={'/basket'}>
                                <img src={logo3} alt=""/>
                                <span>Корзина</span>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;