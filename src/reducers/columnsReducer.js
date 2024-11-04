import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    columnsById: {
        'col-1': {
            colId: 'col-1',
            columnName: 'First Column',
            elements: ['element-1']
        },
        'col-2': {
            colId: 'col-2',
            columnName: 'Second Column',
            elements: ['element-2']
        }
    },
}

const columnSlice = createSlice({
  name: 'columns',
  initialState: initialState,
  reducers: {
    addCol: (state, action) => {
      let _columnsById = {...state.columnsById};
      const { colId, newCol } = action.payload;
      _columnsById[colId] = newCol
      state.columnsById = _columnsById;
    },
  },
});

export const { addCol } = columnSlice.actions;
export default columnSlice.reducer;