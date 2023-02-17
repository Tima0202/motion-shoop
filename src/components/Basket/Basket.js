import React, {useEffect} from 'react';
import Slider from "react-slick";
import {useDispatch, useSelector} from "react-redux";
import BasketTable from "./BasketTable";
import data from "../services/data";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const Basket = () => {
    const {basket} = useSelector(s => s)
    const dispatch = useDispatch()
    const {product} = useSelector(s => s)



    useEffect(() => {
        dispatch({type: 'GET_PRODUCT', payload: data})
    }, [])
    return (
        <div id='basket'>
            <div className="container">
                <h1>Оформление товара</h1>
                <div className="basket">
                    <div className="basket-block">
                        <div className="block">
                            <h2>Контакные данные</h2>
                            <input className='register' type="text" placeholder='Имя*'/>
                            <input className='register' type="text" placeholder='Фамилия*'/>
                            <input className='register' type="text" placeholder='E-Mail*'/>
                            <input className='register' type="text" placeholder='Телефон*'/>
                            <h2>Оплата</h2>
                            <div className="content">
                                <input className='input-check' type="radio" style={{
                                    borderRadius: '50px'
                                }}/>
                                <p>Оплачу наличными при получении <br/> заказа</p>
                            </div>
                            <p>Оплата с банковской картой через <br/> <strong style={{color: 'green'}}>PayBox</strong>
                            </p>
                            <button>Оплатить</button>
                        </div>
                        <div className="block">
                            <h2>Доставка</h2>
                            <p>Выберите удобный способ доставки <br/> для этого заказа.</p>
                            <div className="content">
                                <input style={{
                                    width:'15px',
                                    height:'15px'
                                }} type="radio"/>
                                <h5>Самовывоз</h5>
                            </div>
                            <div className="content">
                                <input style={{
                                    width:'15px',
                                    height:'15px'
                                }} type="radio"/>
                                <h5>Доставка курьером</h5>
                            </div>
                            <div className="content1">
                                <div className="golden">
                                    <span>Общая сумма:</span>
                                    <h3>3000$</h3>
                                </div>
                                <span>Ещё не оплачено</span>
                            </div>
                        </div>
                    </div>
                    <div className="basket-block">
                        {/*<Slider {...settings}>*/}

                            {/*{*/}
                            {/*    product.map(el => <BasketTable el={el}/>)*/}
                            {/*}*/}

                        {/*</Slider>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Basket;