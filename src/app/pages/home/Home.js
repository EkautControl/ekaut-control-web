import React, {Component} from 'react';

//Components
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";

//Css
import './Home.css'

//Routing
import {Switch, Route} from "react-router-dom";

//Components
import BeerHouse from "../beerhouse/BeerHouse";

class Home extends Component {

    constructor(props) {
        super(props);

        this.routes = [
            {
                name: "Controle dos tanques",
                path: "/",
                exact: true,
                children: (props) => <BeerHouse title={props.title}/>

            },
            {
                name: "Histórico de atividades",
                path: "/history",
                children: (props) => (<p>{props.name}</p>)
            },
            {
                name: "Informações das cervejas",
                path: "/beers",
                children: (props) => (<p>{props.name}</p>)
            }
        ]
    }

    render() {
        return (
            <div className="home">
                <Sidebar routes={this.routes}/>
                <div className="home-wrapper">
                    <Switch>
                        {
                            this.routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    children={<Header title={route.name}/>}
                                />
                            ))
                        }
                    </Switch>
                    <Switch>
                        {
                            this.routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    render={() => <route.children title={route.name}/>}
                                    title={route.name}
                                />
                            ))
                        }
                    </Switch>

                </div>

            </div>
        );
    }
}

export default Home
