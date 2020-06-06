import React, {Component} from 'react';

//style
import "./Sidebar.css"

//logo
import logo from '../../../assets/logo.png'
import {Link} from "react-router-dom";

//Components
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

class Sidebar extends Component {
    render() {
        const {routes} = this.props

        return (
            <div className="sidebar">
                <div>
                    <div className="logo-wrapper">
                        <img className="logo" src={logo}/>
                        <div className="divider horizontal absolute bottom-0"/>
                    </div>
                    <List>
                        {
                            routes &&
                            routes.map(route => (
                                <div className="sidebar-router-item">
                                    <Link to={route.path}>
                                        <ListItem button>
                                            {route.name}
                                        </ListItem>
                                    </Link>
                                </div>
                            ))
                        }
                    </List>
                </div>
            </div>
        );
    }
}

export default Sidebar;