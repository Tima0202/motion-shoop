import React from 'react';
import salam1 from "../../image/man.png"
import salam2 from "../../image/woman.png"
import salam3 from "../../image/girl.png"
import salam4 from "../../image/foot.png"
import womenClothes1 from "../../image/wom-img2.svg"
import womenClothes2 from "../../image/wom-img3.svg"
import womenClothes3 from "../../image/wom-img4.svg"
import womenClothes4 from "../../image/wom-img5.svg"
import womenClothes5 from "../../image/t-shirts.jpg"
import womenClothes6 from "../../image/t-sh.jpg"
import womenClothes7 from "../../image/modnye.jpg"
import womenClothes8 from "../../image/kurtka.jpg"
import womenClothes9 from "../../image/kurtki.jpg"
import womenClothes10 from "../../image/Rectangle 2270.svg"
import womenClothes11 from "../../image/Rectangle 2271.svg"
import womenClothes12 from "../../image/aqua.jpg"
import womenClothes13 from "../../image/dres.webp"
import womenClothes14 from "../../image/jens.jpg"
import womenClothes15 from "../../image/топ.webp"

const WomenPage = () => {
    return (
        <div id="womenPage">
            <div className="container">
                <div className="womenpage">
                    <img src={salam1} alt=""/>
                    <img src={salam2} alt=""/>
                    <img src={salam3} alt=""/>
                    <img src={salam4} alt=""/>
                    <h1>Женская одежда</h1>
                </div>

                <div className="women-images">
                    <div className="img-block">
                        <div>
                            <img src={womenClothes1} alt=""/>
                            <h1 className="title">2100 сом</h1>
                            <p className="desc">Футболка нарядная / летняя</p>
                        </div>

                        <div>
                            <img src={womenClothes2} alt=""/>
                            <h1 className="title">2500 сом</h1>
                            <p className="desc">Комбизон / летняя</p>
                        </div>

                        <div>
                            <img src={womenClothes3} alt=""/>
                            <h1 className="title">2100 сом</h1>
                            <p className="desc"> Футболка нарядная / летняя</p>
                        </div>

                        <div>
                            <img src={womenClothes4} alt=""/>
                            <h1 className="title">3500 сом</h1>
                            <p className="desc">Классический костюм</p>
                        </div>

                        <div>
                            <img src={womenClothes5} alt="" className="shirt"/>
                            <h1 className="title">2100 сом</h1>
                            <p className="desc">Футболка / летняя</p>
                        </div>
                    </div>

                    <div className="img-block">
                        <div>
                            <img src={womenClothes7} alt="" className="shirt"/>
                            <h1 className="title">3200 сом</h1>
                            <p className="desc">Куртка / весна </p>
                        </div>

                        <div>
                            <img src={womenClothes6} alt="" className="shirt"/>
                            <h1 className="title">2100 сом</h1>
                            <p className="desc">Футболка нарядная / летняя</p>
                        </div>

                        <div>
                            <img src={womenClothes8} alt="" className="shirt"/>
                            <h1 className="title">22 000 сом</h1>
                            <p className="desc">Модные куртки / весна</p>
                        </div>

                        <div>
                            <img src={womenClothes9} alt="" className="shirt"/>
                            <h1 className="title">6000 сом</h1>
                            <p className="desc">Пиджак / весна</p>
                        </div>

                        <div>
                            <img src={womenClothes10} alt=""/>
                            <h1 className="title">2100 сом</h1>
                            <p className="desc">Футболка нарядная / летняя</p>
                        </div>
                    </div>
                    <div className="img-block">
                        <div>
                            <img src={womenClothes11} alt=""/>
                            <h1 className="title">3000 сом</h1>
                            <p className="desc">Брюки-килоты</p>
                        </div>
                        <div>
                            <img src={womenClothes12} alt="" className="shirt"/>
                            <h1 className="title">3500 сом</h1>
                            <p className="desc">Юбка / летняя</p>
                        </div>
                        <div>
                            <img src={womenClothes13} alt="" className="shirt"/>
                            <h1 className="title">8500 сом</h1>
                            <p className="desc">Платья нарядная / летняя</p>
                        </div>

                        <div>
                            <img src={womenClothes14} alt="" className="shirt"/>
                            <h1 className="title">15 000 сом</h1>
                            <p className="desc">Спортивный костюм</p>
                        </div>

                        <div>
                            <img src={womenClothes15} alt="" className="shirt"/>
                            <h1 className="title">1000 сом</h1>
                            <p className="desc">Топы / летняя</p>
                        </div>
                    </div>
                </div>
                <div className="col text-center after-posts">
                    <button type="button" className="btn btn-secondary">Показать еще 	&darr;</button>                </div>
            </div>
        </div>
    );
};

export default WomenPage;