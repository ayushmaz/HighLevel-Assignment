import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    columnsById: {
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