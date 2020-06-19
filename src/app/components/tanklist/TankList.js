import React from 'react';

//Css
import "./TankList.css"

//Constants
import PHASES from '../../constants/phases'

function TankList (props) {
    return (
        <div className="tanklist">
            {
                props.tanks.map((tank, key) => (<Tank key={key} tank={tank}/>))
            }
        </div>
    );
}

const Tank = (props) => {
    const {tank, beer, production} = props.tank

    let phase = PHASES[production.phase]

    let color = "#8D95B9" //default color

    return (
        <div className="card">
            <div className="card-header">
                <p className="header-value">{tank}</p>
                <div className="title-box">
                    <p className="subtitle">{beer === undefined ?"--" : beer.brewery} | LOTE {production.batch}</p>
                    <p className="title">{beer === undefined ?"--" :beer.name}</p>
                </div>
            </div>
            <div className="divider horizontal card-divider"/>
            <p className="description">Previsão da próxima fase: <ins>12/06/2020</ins></p>
            <div className="footer" style={{background:color}}>
                <p>{(phase !== undefined) ? phase.label : ""}</p>
            </div>
            <div className={`status-indicator ${(production.hasProblem)? "alert":""}`}/>
        </div>
    )
}

export default TankList;
