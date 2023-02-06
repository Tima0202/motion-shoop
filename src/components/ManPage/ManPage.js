import React from 'react';
import photo from "../../image/man.png"
import photo2 from "../../image/woman.png"
import photo3 from "../../image/girl.png"

const ManPage = () => {
    return (
        <div id='manpage'>
            <div className="container">
                <div className="manpage">
                    <div className="photo">
                        <img src={photo} alt="img"/>
                        <img src={photo2} alt="img"/>
                        <img src={photo3} alt="img"/>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManPage;