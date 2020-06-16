import React, {Component} from 'react';

//Css
import './BeerHouse.css'

//Slice
import {fetchActiveTanks, fetchInactiveTanks} from "./BeerHouseSlice";

//Components
import TankList from "../../components/tanklist/TankList";
import {ButtonPrimary} from "../../components/widgets/Buttons";
import AddIcon from '@material-ui/icons/Add';

//Redux
import {connect} from "react-redux";

//Components
import {FormDialog} from "../../components/widgets/Dialog";
import {SelectInput, TextInput} from "../../components/widgets/Input";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

class BeerHouse extends Component {

    constructor(props) {
        super(props)
        this.title = props.title

        this.state = {
            productionFormOpen: false
        }

        this.handleNewProductionClick = this.handleNewProductionClick.bind(this)
        this.handleNewProductionSubmission = this.handleNewProductionSubmission.bind(this)
        this.handleNewProductionCanceled = this.handleNewProductionCanceled.bind(this)

    }

    componentDidMount() {
        this.props.fetchActiveTanks()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.props)
    }

    handleNewProductionClick() {
        this.setState({productionFormOpen: true})
    }

    handleNewProductionSubmission(production) {

    }

    handleNewProductionCanceled() {
        this.setState({productionFormOpen: false})
    }

    render() {
        const {productionFormOpen} = this.state
        const {tanksWithProblem, activeTanks} = this.props

        return (
            <div className="beerhouse container">
                <div className="page-title">
                    <p className="title">{this.title}</p>
                    <ButtonPrimary onClick={this.handleNewProductionClick}
                                   startIcon={<AddIcon/>}>NOVA PRODUÇÂO</ButtonPrimary>
                </div>
                <p>TANQUES EM ALERTA</p>
                <TankList tanks={tanksWithProblem}/>

                <p>TANQUES EM PROGRESSO</p>
                <TankList tanks={activeTanks}/>
                <NewProductionForm open={productionFormOpen}
                   onCanceled={this.handleNewProductionCanceled}/>
            </div>
        );
    }
}

const NewProductionForm = (props) => {
    return (
        <FormDialog open={props.open} title={"ADICIONAR NOVA PRODUÇÃO"}>
            <Grid container spacing={3} alignItems="flex-start">
                <Grid item xs={6}>
                    <SelectInput>Cerveja</SelectInput>
                </Grid>
                <Grid item xs={3}>
                    <TextInput>Lote</TextInput>
                </Grid>
                <Grid item xs={3}>
                    <SelectInput>Tanque</SelectInput>
                </Grid>
                <Grid item xs={6}>
                    <SelectInput>Fase</SelectInput>
                </Grid>
                <Grid item xs={6}>
                    <TextInput  >Data</TextInput>
                </Grid>
                <Grid item xs={12} style={{textAlign: "right", marginTop:'15px'}}>
                    <Button
                        onClick={props.onCanceled}
                        style={{color:'rgba(0, 0, 0, 0.29)', marginRight:'5px'}}>CANCELAR</Button>
                    <ButtonPrimary>ADICIONAR</ButtonPrimary>
                </Grid>
            </Grid>
        </FormDialog>
    )
}

function mapDispatchToProp(dispatcher) {
    return ({
        fetchActiveTanks: () => dispatcher(fetchActiveTanks()),
    })
}

function mapStateToProps(state) {
    return ({
        activeTanks: state.beerHouse.activeTanks,
        tanksWithProblem: state.beerHouse.tanksWithProblem,
    })
}

export default connect(mapStateToProps, mapDispatchToProp)(BeerHouse)
