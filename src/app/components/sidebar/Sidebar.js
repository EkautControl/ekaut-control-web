import React, {Component} from 'react';

//style
import "./Sidebar.css"

//logo
import logo from '../../../assets/logo.svg'

//Components
import {withStyles} from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import {Link} from "react-router-dom";
import Tab from "@material-ui/core/Tab";

class Sidebar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            selected: 0
        }

        this.handlePageChange = this.handlePageChange.bind(this)
    }

    handlePageChange(event, value) {
        this.setState({selected: value})
    }

    render() {
        const {routes} = this.props
        const {selected} = this.state

        return (
            <div className="sidebar">
                <div className="container sm">
                    <img alt="Ekault Control" className="logo" src={logo}/>
                    <SidebarTab
                        orientation="vertical"
                        variant="scrollable"
                        aria-label="Vertical tabs example"
                        className="tabs"
                        value={selected}
                        onChange={this.handlePageChange}
                    >
                        {
                            routes &&
                            routes.map((route, key) => (
                                <TabItem
                                    key={key}
                                    label={
                                        <Link to={route.path}>{route.name}</Link>
                                    }>
                                </TabItem>
                            ))
                        }
                    </SidebarTab>
                </div>
            </div>
        );
    }
}

const SidebarTab = withStyles({
    indicator: {
        display: 'flex',
        backgroundColor: 'transparent',
        left: 0,
        alignItems: 'center',
        '& > span': {
            maxWidth: 40,
            width: '130%',
            height: '60%',
            backgroundColor: '#E47E00'
        },

    }
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const TabItem = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        minWidth: 72,
        fontFamily: 'Open Sans',
        fontSize: '15px',
        color: '#AAAAAA',
        textAlign:'left',
        margin: '8px 0',
        '& > span': {
            width: '100%',
            alignItems:'start',
            textDecoration: 'none',
        },'& > span > a': {
            textDecoration: 'none',
            color: 'white',
            width: '100%',
            height: '100%',
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            left: 0,
            margin: 0,
            textTransform: 'uppercase'
        },
    },
    selected: {
        fontWeight: 700,
        marginLeft: '10px'
    }

}))((props) => <Tab {...props} />);

export default Sidebar;
