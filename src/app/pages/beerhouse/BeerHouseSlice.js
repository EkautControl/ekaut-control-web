import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

//API
import {getActiveTanks, getInactiveTanks, submitProduction as _submitProduction} from "../../remote/Tank";
import {listBeers} from "../../remote/Beers";

const name = "beerhouse"

export const fetchActiveTanks = createAsyncThunk(
    name + "/FetchActiveTanks",
    async () => {
        const result = await getActiveTanks()
        return result.data
    }
);

export const fetchInactiveTanks = createAsyncThunk(
    name + "/FetchInactiveTanks",
    async () => {
        const result = await getInactiveTanks()
        return result.data
    }
);

export const fetchBeers = createAsyncThunk(
    name + "/FetchBeer",
    async () => {
        const result = await listBeers()
        return result.data
    }
);

export const submitProduction = createAsyncThunk(
    name + "/SubmitProduction",
    async (production) => {
        const result = await _submitProduction(production)
        return result.data
    }
);


const BeerHouseSlice = createSlice({
    name: name,
    initialState: {
        activeTanks: [],
        inactiveTanks: [],
        tanksWithProblem: [],
        beers: [],
    },
    reducers: {

    },
    extraReducers: {
        [fetchActiveTanks.fulfilled]: (state, action) => {
            state.activeTanks = []
            state.tanksWithProblem = []

            action.payload.forEach(tank => {
                if (tank.production.hasProblem) {
                    state.tanksWithProblem = [...state.tanksWithProblem, tank]
                } else {
                    state.activeTanks = [...state.activeTanks, tank]
                }
            })
        },
        [fetchInactiveTanks.fulfilled]: (state, action) => {
           state.inactiveTanks = action.payload
        },
        [fetchBeers.fulfilled]: (state, action) => {
            state.beers = action.payload
        },
        [submitProduction.fulfilled]: (state, action) => {
            state.activeTanks.push(action.payload)
        }

    }
})

export default BeerHouseSlice.reducer
