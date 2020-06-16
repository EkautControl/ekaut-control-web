import React from 'react';

//Css
import "./TankList.css"

function TankList (props) {
    return (
        <div className="tanklist">
            {
                props.tanks.map(tank => (<Tank tank={tank}/>))
            }
        </div>
    );
}

const Tank = (props) => {
    const {tank, beer, production} = props.tank

    return (
        <div className="card">
            <div className="card-header">
                <p className="header-value">{tank}</p>
                <div className="title-box">
                    <p className="subtitle">{beer.brewery} | LOTE {production.batch}</p>
                    <p className="title">{beer.name}</p>
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
