import React from 'react';

//Css
import "./TankList.css"

function TankList (props) {
    return (
        <div className="tanklist">
            <Tank/>
            <Tank/>
            <Tank/>
            <Tank/>
            <Tank/>

        </div>
    );
}

const Tank = (props) => {
    return (
        <div className="card">
            <div className="card-header">
                <p className="header-value">05</p>
                <div className="title-box">
                    <p className="subtitle">EKAULT | LOTE 5</p>
                    <p className="title">AMERICAN ipa </p>
                </div>
            </div>
            <div className="divider horizontal card-divider"/>
            <p className="description">Previsão da próxima fase: <ins>12/06/2020</ins></p>
            <div className="footer">
                <p>FERMENTAÇAO</p>
            </div>
        </div>
    )
}

export default TankList;
