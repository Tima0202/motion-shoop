
import React from 'react';


const ShoesPage = () => {


    return (

        <div id="shoesPage">
            <div className="container">
                <div className="shoesPage">
                    <img src={salam1} alt=""/>
                    <img src={salam2} alt=""/>
                    <img src={salam3} alt=""/>
                    <img src={salam4} alt=""/>
                    <h1>Женская одежда</h1>
                </div>


                <div className="col text-center after-posts">
                    <button type="button" className="btn btn-secondary">Показать еще 	&darr;</button>                </div>
            </div>

        </div>
    );
};

export default ShoesPage;