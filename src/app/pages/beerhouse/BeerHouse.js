import React, {Component} from 'react';

//Css
import './BeerHouse.css'

//Slice
import {fetchTanks} from "./BeerHouseSlice";

//Components
import TankList from "../../components/tanklist/TankList";
import {ButtonPrimary} from "../../components/widgets/Widgets";
import AddIcon from '@material-ui/icons/Add';

//Redux
import {connect} from "react-redux";

class BeerHouse extends Component {

    constructor(props) {
        super(props)
        this.title = props.title
    }

    componentDidMount() {
        this.props.fetchTanks()
    }

    render() {
        return (
            <div className="beerhouse container">
                <div className="page-title">
                    <p className="title">{this.title}</p>
                    <ButtonPrimary
                        startIcon={<AddIcon/>}
                        variant="contained"
                        color="primary">NOVA PRODUÇÂO</ButtonPrimary>
                </div>

                <p>TANQUES EM ALERTA</p>
                <TankList/>
                <p>TANQUES</p>
                <TankList/>
            </div>
        );
    }
}

function mapDispatchToProp(dispatcher) {
    return ({
        fetchTanks: () => dispatcher(fetchTanks())
    })
}

function mapStateToProps(state) {
    return ({
        activeTanks: state.beerHouse.activeTanks
    })
}

export default connect(mapStateToProps, mapDispatchToProp)(BeerHouse)
