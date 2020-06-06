import React, {Component} from 'react';
import PropTypes from 'prop-types';

//Css
import "./Header.css"

//Components
import Container from "@material-ui/core/Container";

class Header extends Component {

    render() {
        const {title} = this.props

        return (
            <div className="header">
                <div className="container">
                    <p className="header-title">{title}</p>
                </div>
                <div className="divider horizontal absolute bottom-0"/>
            </div>
        );
    }
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header;