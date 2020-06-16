import React, {Component} from 'react';

//Css
import './BeerInformation.css'

//Slice
import {fetchBeers} from "./BeerInformationSlice";

//Components
import BeerList from "../../components/beerlist/BeerList";
import {ButtonPrimary} from "../../components/widgets/Buttons";
import AddIcon from '@material-ui/icons/Add';

//Redux
import {connect} from "react-redux";

class BeerInformation extends Component {

    constructor(props) {
        super(props)
        this.title = props.title
    }

    componentDidMount() {
       this.props.fetchBeers()
    }

    render() {
        return (
            <div className="beer-information container">
                <div className="page-title">
                    <p className="title">{this.title}</p>
                    <ButtonPrimary
                        startIcon={<AddIcon/>}
                        variant="contained"
                        color="primary">NOVA CERVEJA</ButtonPrimary>
                </div>

                <p>EM PRODUÇÃO</p>
                <BeerList beers={this.props.activeBeers} />
                <p>INATIVAS</p>
                <BeerList beers={this.props.inactiveBeers} />
            </div>
        );
    }
}

function mapDispatchToProp(dispatcher) {
    return ({
        fetchBeers: () => dispatcher(fetchBeers())
    })
}

function mapStateToProps(state) {
    return ({
        activeBeers: state.beerInformation.activeBeers,
        inactiveBeers: state.beerInformation.inactiveBeers,
    });
}

export default connect(mapStateToProps, mapDispatchToProp)(BeerInformation)
