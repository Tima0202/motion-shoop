import React from 'react';
import {BsTelephone} from "react-icons/bs";

const Info = () => {
    return (
        <div id='info'>
            <div className="container">
                <div className="info">
                    <h1> О нас</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus, at suspendisse ullamcorper cras
                        suspendisse ac velit aliquet pellentesque. <br/> Etiam vitae amet euismod augue id. Nec, eu dolor
                        dolor risus duis. Fames sem cras diam pharetra arcu. Augue suscipit tincidunt tristique
                        condimentum <br/> eget sapien. Elementum sed fames sem venenatis, in viverra. Sed ac, sit senectus
                        purus. Tincidunt orci, condimentum pharetra placerat viverra nisl, dolor <br/> at arcu. Dui ante fames
                        eget ultrices non pretium.</p>
                    <div className="block">
                        <h2>Контакты</h2>
                        <div className="content">
                            <BsTelephone/>
                            <h5>+996 312 90 30 30</h5>
                        </div>
                        <div className="content">
                            <BsTelephone/>
                            <h5>+996 312 90 30 30</h5>
                        </div>
                        <div className="content">
                        <BsTelephone/>
                        <h5>+996 312 90 30 30</h5>
                    </div>
                    </div>
                    <div className="block"></div>
                </div>
            </div>
        </div>
    );
};

export default Info;