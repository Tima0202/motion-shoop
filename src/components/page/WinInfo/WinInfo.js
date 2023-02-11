import React from 'react';
import Data from "../../services/data";

const WinInfo = () => {
    return (
        <div id="wininfo">
            <div className="container">
                <div className="wininfo">
                    {
                        Data.slice(0, 1).map(el => (
                            <div key={el.id} className="block">
                                <div className="left">
                                    <img src={el.img} alt="image"/>
                                </div>
                                <div className="right">
                                    <h1>Montana Oversize T-shirt <br/> AFRRSJDHSVOUYVE iubsdb</h1>
                                    <h2>{el.price}</h2>
                                    <span>Таблица размеров:</span>
                                    <div className="sizes">
                                        <div className="size">M</div>
                                        <div className="size">XL</div>
                                        <div className="size">XXL</div>
                                        <div className="size">C</div>
                                        <div className="size">S</div>
                                        <div className="size">XS</div>
                                    </div>
                                    <span>Цвет:</span>
                                    <div className="colors">
                                        <div style={{background: "red"}} className="color"></div>
                                        <div style={{background: "green"}} className="color"></div>
                                        <div style={{background: "black"}} className="color"></div>
                                        <div style={{background: "blue"}} className="color"></div>
                                    </div>
                                    <button className='btn-add-cor'>Добавить в корзину</button>
                                    <button className='btn-buy'>Купить сейчас</button>
                                </div>
                            </div>
                        ))
                    }
                    <h2>Описание</h2>
                    <p> Футбо́лка — предмет нательной одежды для обоих полов, обычно не имеющий пуговиц[1],
                        воротника и <br/> карманов, с короткими рукавами, закрывающий туловище, часть рук и
                        верх бёдер, надевается через <br/> голову. Является одним из самых массовых видов
                        одежды
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WinInfo;