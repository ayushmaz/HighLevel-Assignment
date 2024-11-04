import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    elementsById: {
        'element-1': {
            elementId: 'element-1',
            elementType: 'HEADLINE',
            metadata: {
                content: 'Heading Text Goes Here'
            }
        },
        'element-2': {
            elementId: 'element-2',
            elementType: 'IMAGE',
            metadata: {
                url: 'https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                alt: 'flower'
            }
        }
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
  },
});

export const { addElement } = elementSlice.actions;
export default elementSlice.reducer;