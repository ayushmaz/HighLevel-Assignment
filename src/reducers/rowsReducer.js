import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    rowsById: {
        'row-1': {
            rowId: 'row-1',
            sectionName: 'First Row',
            columns: []
        }
    },
}

const rowSlice = createSlice({
  name: 'rows',
  initialState: initialState,
  reducers: {
    addRow: (state, action) => {
      state.rows.push(action.payload);
    },
  },
});

export const { addRow } = rowSlice.actions;
export default rowSlice.reducer;