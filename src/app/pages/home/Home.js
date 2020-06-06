import React, {Component} from 'react';

//Components
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";

//Css
import './Home.css'

//Routing
import {Switch, Route} from "react-router-dom";

class Home extends Component {

    constructor(props) {
        super(props);

        this.routes = [
            {
                name: "CONTROLE DA ADEGA",
                path: "/beerhouse",
                exact: true,

            },
            {
                name: "HISTÓRICO DE ATIVIDADES",
                path: "/history",
            },
            {
                name: "CERVEJAS",
                path: "/beers",
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
                </div>

            </div>
        );
    }
}

export default Home