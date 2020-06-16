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
        activeBeers: [],
        inactiveBeers: [],
    },
    reducers: {

    },
    extraReducers: {
        [fetchBeers.fulfilled]: (state, action) => {
            const activeBeers = [];
            const inactiveBeers = [];

            action.payload.forEach(beer => {
                beer.active ? activeBeers.push(beer) : inactiveBeers.push(beer);
            })
            
            state.activeBeers = activeBeers;
            state.inactiveBeers = inactiveBeers;
        }
    }
})

export default BeersSlice.reducer
