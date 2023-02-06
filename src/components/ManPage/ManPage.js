import React from 'react';
import photo from "../../image/man.png"
import photo2 from "../../image/woman.png"
import photo3 from "../../image/girl.png"
import photo4 from "../../image/foot.png"

const ManPage = () => {
    return (
        <div id='manpage'>
            <div className="container">
                <div className="manpage">
                    <div className="photo">
                        <img className="man" src={photo} alt="img"/>
                        <img className="woman" src={photo2} alt="img"/>
                        <img className="girl" src={photo3} alt="img"/>
                        <img className="foot" src={photo4} alt="img"/>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManPage;