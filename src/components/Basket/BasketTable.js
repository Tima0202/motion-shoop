import React, {useState} from 'react';
import {Link} from "react-router-dom";
import basket from "../../image/icons/basket.png";
import Data from "../services/data";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {useDispatch} from "react-redux";

const BasketTable = ({el}) => {
    const data = Data
    const dispatch = useDispatch()
    const addToBasket = (product) => {
        dispatch({type: 'ADD_TO_BASKET', payload: product})
    }

    return (

        <div>
            <div className="recomen-block1">
                {
                    data.map(el=>(
                        <Link className='recomen-block' to={'/WinInfo'}>
                            <div className="block">
                                <img src={el.img} alt=""/>
                            </div>
                            <div className="block">
                                <h1>Montana Oversize T-shirt AFR</h1>
                                <h4>Опции: XXL, чёрный</h4>
                                <h5>{el.price}</h5>
                                <div className="comment">
                                    <span onClick={()=> addToBasket(el)} className='spol'><AiOutlinePlus/></span>
                                    <span className='polish'>{el.quantity}</span>
                                    <span onClick={()=> dispatch({type: 'DECREASE_TO_BASKET', payload: el.id})} className='spol'><AiOutlineMinus/></span>
                                </div>
                            </div>
                        </Link>
                    ))
                }

            </div>
        </div>

    );
};

export default BasketTable;