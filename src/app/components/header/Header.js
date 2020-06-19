import React, {Component} from 'react';
import PropTypes from 'prop-types';

//Css
import "./Header.css"

//Assets
import notification from '../../../assets/notification.svg'

//Components
import IconButton from "@material-ui/core/IconButton";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import {ButtonAlert} from "../widgets/Buttons";

class Header extends Component {

    render() {
        return (
            <div className="header">
                <div className="container w-100">
                    <div className="header-menu">
                        <ButtonAlert
                            startIcon={<InfoOutlinedIcon/>}
                            variant="contained"
                            color="primary">REPORTAR PROBLEMA</ButtonAlert>
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
            <img alt="Notifications" src={notification}/>
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
