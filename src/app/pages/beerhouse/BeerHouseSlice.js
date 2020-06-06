import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

//API
import {getActiveTanks} from "../../remote/Tank";

const name = "beerhouse"

export const fetchTanks = createAsyncThunk(
    name + "/FetchTanks",
    async () => {
        const result = await getActiveTanks()
        return result.data
    }
);

const BeerHouseSlice = createSlice({
    name: name,
    initialState: {
        activeTanks: []
    },
    reducers: {

    },
    extraReducers: {
        [fetchTanks.fulfilled]: (state, action) => {
            state.activeTanks = action.payload
        }
    }
})

export default BeerHouseSlice.reducer
