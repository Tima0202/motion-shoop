import React, {useState} from 'react';
import salam1 from "../../image/man.png";
import salam2 from "../../image/woman.png";
import salam3 from "../../image/girl.png";
import salam4 from "../../image/foot.png";


const ShoesPage = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(current => !current);
    }

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