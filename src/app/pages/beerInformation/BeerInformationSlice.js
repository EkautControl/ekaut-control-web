import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

//API
import {listBeers} from "../../remote/Beers";

const name = "beers"

export const fetchBeers = createAsyncThunk(
    name + "/FetchBeers",
    async () => {
        const result = await listBeers()
        return result.data
    }
);

const BeersSlice = createSlice({
    name: name,
    initialState: {
        beers: [],
    },
    reducers: {

    },
    extraReducers: {
        [fetchBeers.fulfilled]: (state, action) => {
            state.beers = action.payload;
        }
    }
})

export default BeersSlice.reducer
