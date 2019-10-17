import React from 'react';
import logo from "./test.jpg";

function Card() {
    return (
        <div className="col-md-2">
            <div className="card">

                <img className="card-img" src={logo}>
                </img>
            </div>
        </div>

    );
}

export default Card;
