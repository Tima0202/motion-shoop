import React from 'react';
import home1 from '../../image/home1.png'
import homebg from '../../image/home-bg.png'
import photo from "../../image/man.png"
import photo2 from "../../image/woman.png"
import photo3 from "../../image/girl.png"
import photo4 from "../../image/foot.png"
import basket from "../../image/icons/basket.png"
import {Link} from "react-router-dom";
// photo recomend
import reaomen1 from "../../image/recomen/Rectangle 2268.png"
import reaomen2 from "../../image/recomen/Rectangle 2268 (1).png"
import reaomen3 from "../../image/recomen/Rectangle 2268 (2).png"
import reaomen4 from "../../image/recomen/Rectangle 2269.png"
import reaomen5 from "../../image/recomen/Rectangle 2269 (1).png"
import reaomen6 from "../../image/recomen/Rectangle 2269 (2).png"
import reaomen7 from "../../image/recomen/Rectangle 2270.png"
import reaomen8 from "../../image/recomen/Rectangle 2270 (1).png"
import reaomen9 from "../../image/recomen/Rectangle 2270 (2).png"
import reaomen10 from "../../image/recomen/Rectangle 2271.png"
import reaomen11 from "../../image/recomen/Rectangle 2271 (1).png"
import reaomen12 from "../../image/recomen/Rectangle 2271 (2).png"
import reaomen13 from "../../image/recomen/Rectangle 2272.png"
import reaomen14 from "../../image/recomen/Rectangle 2272 (1).png"
import reaomen15 from "../../image/recomen/Rectangle 2272 (2).png"


const Home = () => {
    return (
        <div id='home'>
            <img className="bag" src={homebg} alt=""/>
            <div className="container">
                <div className="home">
                    <div className="block1">
                        <img className="family" src={home1} alt=""/>
                        <div className="content-1">
                            <h1>ОДЕЖДА ДЛЯ ВСЕЙ СЕМЬИ!</h1>
                            <ul style={{listStyleType:"circle"}}>
                                <li><Link to={'/WomenPage'}>Для женщин</Link></li>
                                <li><Link to={'/ManPage'}>Для мужчин</Link></li>
                                <li><Link to={'/'}>Для детей</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="block2">
                        <h1>Категории</h1>
                        <div className="content-2">
                            <img src={photo} alt="image"/>
                            <img src={photo2} alt="image"/>
                            <img src={photo3} alt="image"/>
                            <img src={photo4} alt="image"/>
                        </div>
                    </div>
                    <div className="block3">
                        <h1>Возможно, Вам понравится</h1>
                        <div className="content-3">
                            <div className="recomen-block">
                                <div className="block-r">
                                    <img className="man" src={reaomen1} alt="image"/>
                                    <div className="block-content">
                                        <h1>2100 сом</h1>
                                        <img src={basket} alt=""/>
                                    </div>
                                    <h5>Джинсы момсы / банан</h5>
                                </div>

                                <div className="block-r">
                                    <img className="man" src={reaomen2} alt="image"/>
                                    <div className="block-content">
                                        <h1>2100 сом</h1>
                                        <img src={basket} alt=""/>
                                    </div>
                                    <h5>Джинсы момсы / банан</h5>
                                </div>

                                <div className="block-r">
                                    <img className="man" src={reaomen3} alt="image"/>
                                    <div className="block-content">
                                        <h1>2100 сом</h1>
                                        <img src={basket} alt=""/>
                                    </div>
                                    <h5>Джинсы момсы / банан</h5>
                                </div>

                                <div className="block-r">
                                    <img className="man" src={reaomen4} alt="image"/>
                                    <div className="block-content">
                                        <h1>2100 сом</h1>
                                        <img src={basket} alt=""/>
                                    </div>
                                    <h5>Джинсы момсы / банан</h5>
                                </div>

                                <div className="block-r">
                                    <img className="man" src={reaomen5} alt="image"/>
                                    <div className="block-content">
                                        <h1>2100 сом</h1>
                                        <img src={basket} alt=""/>
                                    </div>
                                    <h5>Джинсы момсы / банан</h5>
                                </div>
                            </div>
                            <div className="recomen-block">
                                <div className="block-r">
                                    <img className="man" src={reaomen6} alt="image"/>
                                    <div className="block-content">
                                        <h1>2100 сом</h1>
                                        <img src={basket} alt=""/>
                                    </div>
                                    <h5>Джинсы момсы / банан</h5>
                                </div>

                                <div className="block-r">
                                    <img className="man" src={reaomen7} alt="image"/>
                                    <div className="block-content">
                                        <h1>2100 сом</h1>
                                        <img src={basket} alt=""/>
                                    </div>
                                    <h5>Джинсы момсы / банан</h5>
                                </div>

                                <div className="block-r">
                                    <img className="man" src={reaomen8} alt="image"/>
                                    <div className="block-content">
                                        <h1>2100 сом</h1>
                                        <img src={basket} alt=""/>
                                    </div>
                                    <h5>Джинсы момсы / банан</h5>
                                </div>

                                <div className="block-r">
                                    <img className="man" src={reaomen9} alt="image"/>
                                    <div className="block-content">
                                        <h1>2100 сом</h1>
                                        <img src={basket} alt=""/>
                                    </div>
                                    <h5>Джинсы момсы / банан</h5>
                                </div>

                                <div className="block-r">
                                    <img className="man" src={reaomen10} alt="image"/>
                                    <div className="block-content">
                                        <h1>2100 сом</h1>
                                        <img src={basket} alt=""/>
                                    </div>
                                    <h5>Джинсы момсы / банан</h5>
                                </div>
                            </div>
                            <div className="recomen-block">
                                <div className="block-r">
                                    <img className="man" src={reaomen11} alt="image"/>
                                    <div className="block-content">
                                        <h1>2100 сом</h1>
                                        <img src={basket} alt=""/>
                                    </div>
                                    <h5>Джинсы момсы / банан</h5>
                                </div>

                                <div className="block-r">
                                    <img className="man" src={reaomen12} alt="image"/>
                                    <div className="block-content">
                                        <h1>2100 сом</h1>
                                        <img src={basket} alt=""/>
                                    </div>
                                    <h5>Джинсы момсы / банан</h5>
                                </div>

                                <div className="block-r">
                                    <img className="man" src={reaomen13} alt="image"/>
                                    <div className="block-content">
                                        <h1>2100 сом</h1>
                                        <img src={basket} alt=""/>
                                    </div>
                                    <h5>Джинсы момсы / банан</h5>
                                </div>

                                <div className="block-r">
                                    <img className="man" src={reaomen14} alt="image"/>
                                    <div className="block-content">
                                        <h1>2100 сом</h1>
                                        <img src={basket} alt=""/>
                                    </div>
                                    <h5>Джинсы момсы / банан</h5>
                                </div>

                                <div className="block-r">
                                    <img className="man" src={reaomen15} alt="image"/>
                                    <div className="block-content">
                                        <h1>2100 сом</h1>
                                        <img src={basket} alt=""/>
                                    </div>
                                    <h5>Джинсы момсы / банан</h5>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="block4"></div>
                    <div className="block5"></div>
                </div>
            </div>
        </div>
    );
};

export default Home;