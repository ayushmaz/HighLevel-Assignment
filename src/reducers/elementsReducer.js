import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    elementsById: {
        
    },
}

const elementSlice = createSlice({
  name: 'elements',
  initialState: initialState,
  reducers: {
    addElement: (state, action) => {
      const { elementType, elementId, metadata } = action.payload;
      state.elementsById[elementId] = {
        elementId,
        elementType,
        metadata
      }
    },
    updateElement: (state, action) => {
      const { elementId, metadata } = action.payload;
      state.elementsById[elementId].metadata = metadata;
    }
  },
});

export const { addElement, updateElement } = elementSlice.actions;
export default elementSlice.reducer;