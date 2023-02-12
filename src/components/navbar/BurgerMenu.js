import React from 'react';
import menBurger from "../../image/man-burger.png"
import womenBurger from "../../image/women-burger.png"
import childBurger from "../../image/child-burger.png"
import sheosBurger from "../../image/sheos-burger.png"

const BurgerMenu = ({burger}) => {
    if (!burger) return null
    return (
        <div className='burgermenu'>
            <img className='first' src={menBurger} alt=""/>
            <img src={womenBurger} alt=""/>
            <img src={childBurger} alt=""/>
            <img src={sheosBurger} alt=""/>
            <div className='burger-content'>О нас</div>
            <div className='burger-content'>Доставка</div>
            <div className='burger-content'>FAQ</div>
        </div>
    );
};

export default BurgerMenu;