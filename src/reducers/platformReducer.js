import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    leftTab: {
        open: false,
        type: ''
    }
}

const platformSlice = createSlice({
  name: 'platform',
  initialState: initialState,
  reducers: {
    openLeftTab: (state, action) => {
        const { type } = action.payload;
        state.leftTab.open = true;
        state.leftTab.type = type;
    },
    closeLeftTab: (state) => {
        state.leftTab.open = false;
        state.leftTab.type = '';
    }
  },
});

export const { openLeftTab, closeLeftTab } = platformSlice.actions;
export default platformSlice.reducer;