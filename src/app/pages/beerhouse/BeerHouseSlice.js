import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

//API
import {getActiveTanks} from "../../remote/Tank";

const name = "beerhouse"

export const fetchActiveTanks = createAsyncThunk(
    name + "/FetchActiveTanks",
    async () => {
        const result = await getActiveTanks()
        return result.data
    }
);

const BeerHouseSlice = createSlice({
    name: name,
    initialState: {
        activeTanks: [],
        tanksWithProblem: []
    },
    reducers: {

    },
    extraReducers: {
        [fetchActiveTanks.fulfilled]: (state, action) => {
            let activeTanks = []
            let tanksWithProblem = []
            action.payload.map(tank => {

                if (tank.production.hasProblem) {
                    tanksWithProblem.push(tank)
                } else {
                    activeTanks.push(tank)
                }

            })
            state.activeTanks = activeTanks
            state.tanksWithProblem = tanksWithProblem
        }
    }
})

export default BeerHouseSlice.reducer
