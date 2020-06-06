import React, {Component} from 'react';
import PropTypes from 'prop-types';

//Css
import "./Header.css"

//Components
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";

//Assets
import notification from '../../../assets/notification.svg'

//Components
import IconButton from "@material-ui/core/IconButton";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import {ButtonAlert} from "../widgets/Widgets";

class Header extends Component {

    render() {
        const {title} = this.props

        return (
            <div className="header">
                <div className="container w-100">
                    <div className="header-menu">
                        <ButtonAlert
                            startIcon={<InfoOutlinedIcon/>}
                            variant="contained"
                            color="primary"
                            size="xl">REPORTAR PROBLEMA</ButtonAlert>
                        <IconButton>
                            <NotificationButton/>
                        </IconButton>

                        <ProfileButton color="primary"/>
                    </div>
                </div>
            </div>
        );
    }
}

const NotificationButton = () => {
    return (
        <div className="notification-btn">
            <img src={notification}/>
            <div className="notification-count">
                2
            </div>
        </div>
    )
}

const ProfileButton = () => {
    return (
        <div className="profile-btn">

        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header;
