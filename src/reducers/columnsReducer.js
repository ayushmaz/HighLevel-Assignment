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
        },
        'col-3': {
            colId: 'col-3',
            columnName: 'Third Column',
            elements: []
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
    addElementInColumn: (state, action) => {
      let _columnsById = {...state.columnsById}
      const { colId, elementId } = action.payload;
      _columnsById[colId].elements.push(elementId);
      state.columnsById = _columnsById;
    }
  },
});

export const { addCol, addElementInColumn } = columnSlice.actions;
export default columnSlice.reducer;