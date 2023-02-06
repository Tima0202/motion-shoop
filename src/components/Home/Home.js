import React from 'react';
import home1 from '../../image/home1.png'
import homebg from '../../image/home-bg.png'

const Home = () => {
    return (
        <div id='home'>
            <img src={home1} alt=""/>
            <div className="container">
                <div className="home">
                    <div className="block">
                        <img src={homebg} alt=""/>
                        <div className="content-1">
                            ОДЕЖДА ДЛЯ ВСЕЙ СЕМЬИ!
                        </div>
                        <div className="content-2">
                            <ul style={{listStyleType:"circle"}}>
                                <li>Для женщин</li>
                                <li>Для мужчин</li>
                                <li>Для детей</li>
                            </ul>
                        </div>
                    </div>
                    <div className="block"></div>
                    <div className="block"></div>
                    <div className="block"></div>
                    <div className="block"></div>
                </div>
            </div>
        </div>
    );
};

export default Home;