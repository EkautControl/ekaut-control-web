import React, {Component} from 'react';

//Css
import './BeerHouse.css'

//Slice
import {fetchActiveTanks, fetchInactiveTanks, fetchBeers, submitProduction} from "./BeerHouseSlice";

//Redux
import {connect} from "react-redux";

//Components
import TankList from "../../components/tanklist/TankList";
import {ButtonPrimary} from "../../components/widgets/Buttons";
import AddIcon from '@material-ui/icons/Add';
import {FormDialog} from "../../components/widgets/Dialog";
import {SelectInput, TextInput} from "../../components/widgets/Input";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import DatePicker from "../../components/widgets/DatePicker";
import PHASES from "../../constants/phases";

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
        this.props.fetchBeers()
        this.props.fetchInactiveTanks()
    }

    handleNewProductionSubmission(production) {
        this.props.submitProduction(production)
        this.setState({productionFormOpen: false})
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
                <NewProductionForm
                    tanks={this.props.inactiveTanks}
                    beers={this.props.beers}
                    open={productionFormOpen}
                    onCanceled={this.handleNewProductionCanceled}
                    handleSubmit={this.handleNewProductionSubmission}/>
            </div>
        );
    }
}

const NewProductionForm = (props) => {
    const {tanks, beers} = props
    const production = {batch: 0}

    const handleInput = (evt) => {
        let value = evt.target.value
        production[evt.target.name] = (isNaN(value) ? value : parseInt(value))
    }

    const handleDateInput = (ISODate) => {
        production.startDate = ISODate
    }

    const handleSubmit = () => {
        props.handleSubmit(production)

    }

    return (
        <FormDialog open={props.open} title={"ADICIONAR NOVA PRODUÇÃO"}>
            <Grid container spacing={3} alignItems="flex-start">
                <Grid item xs={6}>
                    <SelectInput
                        name="beerId"
                        title="Cerveja"
                        onChange={handleInput}>
                        <MenuItem
                            value=""
                            disabled>Selecione a cerveja</MenuItem>
                        {
                            beers.map((beer, key) =>
                                <MenuItem key={key} value={beer._id}>{beer.name}</MenuItem>)
                        }
                    </SelectInput>
                </Grid>
                <Grid item xs={3}>
                    <TextInput
                        name="batch"
                        title="Lote"
                        type="number"
                        onChange={handleInput}/>
                </Grid>
                <Grid item xs={3}>
                    <SelectInput
                        name="tank"
                        title="Tanque"
                        onChange={handleInput}>
                        <MenuItem value="" disabled>--</MenuItem>
                        {
                            tanks.map((tank, key) =>
                                <MenuItem key={key} value={tank.tank}>{tank.tank}</MenuItem>)
                        }
                    </SelectInput>
                </Grid>
                <Grid item xs={6}>
                    <SelectInput
                        name="phase"
                        title="Fase"
                        onChange={handleInput}>
                        <MenuItem value="" disabled>Selecione a fase</MenuItem>
                        {
                            PHASES.map((phase, key) =>
                                <MenuItem key={key} value={key}>{phase.label}</MenuItem>)
                        }
                    </SelectInput>
                </Grid>
                <Grid item xs={6}>
                    <DatePicker onChange={(moment)=>handleDateInput(moment.toISOString())}
                    />
                </Grid>
                <Grid item xs={12} style={{textAlign: "right", marginTop:'15px'}}>
                    <Button
                        onClick={props.onCanceled}
                        style={{color:'rgba(0, 0, 0, 0.29)', marginRight:'5px'}}>CANCELAR</Button>
                    <ButtonPrimary onClick={handleSubmit}>ADICIONAR</ButtonPrimary>
                </Grid>
            </Grid>
        </FormDialog>

)
}

function mapDispatchToProp(dispatcher) {
    return ({
        fetchActiveTanks: () => dispatcher(fetchActiveTanks()),
        fetchInactiveTanks: () => dispatcher(fetchInactiveTanks()),
        fetchBeers: () => dispatcher(fetchBeers()),
        submitProduction: (production) => dispatcher(submitProduction(production))
    })
}

function mapStateToProps(state) {
    return ({
        activeTanks: state.beerHouse.activeTanks,
        inactiveTanks: state.beerHouse.inactiveTanks,
        tanksWithProblem: state.beerHouse.tanksWithProblem,
        beers: state.beerHouse.beers
    })
}

export default connect(mapStateToProps, mapDispatchToProp)(BeerHouse)
