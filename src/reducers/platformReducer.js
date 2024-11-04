import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    leftTab: {
        open: false,
        type: '',
        id: ''
    }
}

const platformSlice = createSlice({
  name: 'platform',
  initialState: initialState,
  reducers: {
    openLeftTab: (state, action) => {
        const { type, id } = action.payload;
        state.leftTab.open = true;
        state.leftTab.type = type;
        state.leftTab.id = id;
    },
    closeLeftTab: (state) => {
        state.leftTab.open = false;
        state.leftTab.type = '';
        state.leftTab.id = '';
    }
  },
});

export const { openLeftTab, closeLeftTab } = platformSlice.actions;
export default platformSlice.reducer;