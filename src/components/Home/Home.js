import React from 'react';
import home1 from '../../image/home1.png'
import homebg from '../../image/home-bg.png'

const Home = () => {
    return (
        <div id='home'>
            <div className="container">
                <div className="home">
                    <div className="block">
                        <img src={home1} alt=""/>
                        <img src={homebg} alt=""/>
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