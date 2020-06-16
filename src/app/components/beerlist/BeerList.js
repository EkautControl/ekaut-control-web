import React from 'react';
import { Link } from "react-router-dom";
//Css
import "./BeerList.css"

function BeerList (props) {
    return (
        <div className="beer-list">
            {props.beers.map((beer, key) => <Beer beer={beer} key={key} />)}
        </div>
    );
}

const Beer = (props) => {
    const beer = props.beer;
    let headerColor = '';
    
    if (beer.active) beer.brewery === 'Ekaut' ? headerColor = 'ekaut' : headerColor = '';
    else headerColor = 'inactive';

    return (
        <Link to={`/cervejas/${beer.name}`}>
            <div className="beer-card">
                <div className={`card-header ${headerColor}`}>
                    <p className="card-title">{beer.name}</p>
                </div>
                <div className="card-body">
                    <p className="card-description">Tempo médio de produção: <ins>{beer.averageTime} dias</ins></p>
                    <p className="card-description">Cervejaria: <ins>{beer.brewery}</ins></p>
                </div>
            </div>
        </Link>
    )
}

export default BeerList;
