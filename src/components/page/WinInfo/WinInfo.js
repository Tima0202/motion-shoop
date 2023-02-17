import React, {useState} from 'react';
import Data from "../../services/data";
import {Link} from "react-router-dom";
import Modal from "../Modal/Modal";
import {useDispatch} from "react-redux";


const WinInfo = () => {
    const [style, setStyle] = useState(false)
    const [buttonText, setButtonText] = useState("Добавить в корзину")
    const [buttonName, setButtonName] = useState("btn-add-cor")
    const [OpenModal, setOpenModal] = useState(false)
    const [btnModal, setBtnModal] = useState(false)
    const dispatch = useDispatch()

    const ButtonStyle = () =>{
        setButtonName("btn-add-cor2")
    }

    const changeStyle = () =>{
        setBtnModal(s => !s)
    }
    const changeStyle1 = () =>{
        setStyle(current => !current)
    }


    const logic = ()=>{
        if (btnModal === true){
            handleClick()
            ButtonStyle()
        } else {
            handleClick2()
        }
    }

    const handleClick2 = () =>{
        setOpenModal(true)
        const timer = setTimeout(()=>{
            setOpenModal(false)
        },2000)
        return timer
    }

    const tag =() =>{
        return(<Link style={{color:'red'}} to={'/basket'}>Перейти на корзину</Link>)
    }

    const handleClick = () => {
        // addToBasket()
        setButtonText("Добавлено")
        const timer = setTimeout(()=>{
            setButtonText(tag)
            setButtonName("btn-add-cor3")
        },1500)
        return timer
    }

    const addToBasket = (product) => {
        dispatch({type: 'ADD_TO_BASKET', payload: product})
    }


    return (
        <div id="wininfo">
            <div className="container">
                <div className="wininfo">
                    {
                        Data.slice(1, 2).map(el => (
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
                                        <div style={{
                                            color: btnModal ? "red" : "",
                                            border: btnModal ? "2px solid red" : ""
                                        }} onClick={()=> changeStyle()} className='size'>XXL</div>
                                        <div className="size">C</div>
                                        <div className="size">S</div>
                                        <div className="size">XS</div>
                                    </div>
                                    <span>Цвет:</span>
                                    <div className="colors">
                                        <div style={{background: "red"}} className="color"></div>
                                        <div style={{background: "green"}} className="color"></div>
                                        <div onClick={()=> changeStyle1()} style={{
                                            background: "black",
                                            cursor:"pointer",
                                            border: style ? "2px solid red" : ""
                                        }} className='color'></div>
                                        <div style={{background: "blue"}} className="color"></div>
                                    </div>
                                    <div className="btns">
                                        <button onClick={()=> {
                                            logic()
                                        }} className={buttonName}>{buttonText}</button>
                                        <Modal open={OpenModal}/>
                                        <button className='btn-buy'>Купить сейчас</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <h2>Описание</h2>
                    <p> Футбо́лка — предмет нательной одежды для обоих полов, обычно не имеющий пуговиц,
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