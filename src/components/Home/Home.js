import React, {useState} from 'react';
import home1 from '../../image/home1.png'
import homebg from '../../image/home-bg.png'
import photo from "../../image/man.png"
import photo2 from "../../image/woman.png"
import photo3 from "../../image/girl.png"
import photo4 from "../../image/foot.png"
import basket from "../../image/icons/basket.png"
import {Link} from "react-router-dom";

import {BsArrowDown} from "react-icons/bs";
import Data from "../services/data";
import WinInfo from "../page/WinInfo/WinInfo";


const Home = () => {
    const [viewMore, setViewMore] = useState(15)
    const LoadMore = () =>{
        setViewMore(viewMore + viewMore);

    }

    const slice = Data.slice(0, viewMore)

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
                            <Link className='img' to={'/ManPage'}>
                                <img src={photo} alt="image"/>
                            </Link>
                            <Link className='img' to={'/WomenPage'}>
                                <img src={photo2} alt="image"/>
                            </Link>
                            <Link className='img' to={'/'}>
                                <img src={photo3} alt="image"/>
                            </Link>
                            <Link className='img' to={'/'}>
                                <img src={photo4} alt="image"/>
                            </Link>
                        </div>
                    </div>
                    <div className="block3">
                        <h1>Возможно, Вам понравится</h1>
                        <div className="content-3">
                            <div className="recomen-block1">
                                <Link className='recomen-block' to={'/WinInfo'}>
                                    {
                                        slice.map(el =>
                                            (
                                                <div key={el.id} className="block-r">
                                                    <img className="man" src={el.img} alt="image"/>
                                                    <div className="block-content">
                                                        <h1>{el.price}</h1>
                                                        <img src={basket} alt=""/>
                                                    </div>
                                                    <h5>{el.desc}</h5>
                                                </div>
                                            )
                                        )
                                    }
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="block4">
                        <div className="c-content">
                            <button onClick={() => LoadMore()}>
                                {viewMore === 15 ? "Показать ещё" : ""}
                            </button>
                            <BsArrowDown className="arrow-icon"/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;