import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    rowsById: {
        'row-1': {
            rowId: 'row-1',
            sectionName: 'First Row',
            columns: ['col-1', 'col-2']
        },
        'row-2': {
            rowId: 'row-2',
            sectionName: 'Second Row',
            columns: ['col-3', 'col-4', 'col-5']
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