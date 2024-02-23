import {createSlice} from '@reduxjs/toolkit';

let initialState = {
    data: {},
    loading: false,
};

const exploreSlice = createSlice({
    name: 'explore',
    initialState,
    reducers: {
        setExploreData: (state, action) => {
            state.data = action.payload;
        },
        setExploreLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
});
export const {setExploreData, setExploreLoading} = exploreSlice.actions;
export const selectExploreData = (state) => state.explore.data.message;
export const selectExploreLoading = (state) => state.explore.loading;
export default exploreSlice.reducer;
