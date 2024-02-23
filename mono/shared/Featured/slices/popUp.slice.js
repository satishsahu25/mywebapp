import {createSlice} from '@reduxjs/toolkit';

let initialState = {
    data: [],
    loading: false,
};

const popUpSlice = createSlice({
    name: 'popUp',
    initialState,
    reducers: {
        setPopupData: (state, action) => {
            state.data = action.payload;
        },
        setPopupLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
});
export const {setPopupData, setPopupLoading} = popUpSlice.actions;
export const selectPopupData = (state) => state.popUp.data;
export const selectLoading = (state) => state.popUp.loading;
export default popUpSlice.reducer;
