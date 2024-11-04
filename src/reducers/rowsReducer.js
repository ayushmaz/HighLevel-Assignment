import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    rowsById: {
        
    },
}

const rowSlice = createSlice({
  name: 'rows',
  initialState: initialState,
  reducers: {
    addRow: (state, action) => {
      let _rowsById = {...state.rowsById};
      const { rowId, newRow } = action.payload;
      _rowsById[rowId] = newRow
      state.rowsById = _rowsById;
    },
  },
});

export const { addRow } = rowSlice.actions;
export default rowSlice.reducer;