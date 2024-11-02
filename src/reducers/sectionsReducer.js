import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    sectionsById: {
        'section-1': {
            sectionId: 'section-1',
            sectionName: 'Example Section',
            rows: ['row-1']
        }
    },
    sectionsOrder: ['section-1']
}

const sectionSlice = createSlice({
  name: 'sections',
  initialState: initialState,
  reducers: {
    addSection: (state, action) => {
      state.sections.push(action.payload);
    },
    removeSection: (state, action) => {
      state.sections = state.sections.filter(section => section.sectionId !== action.payload);
    },
    reArrangeSections: (state, action) => {
      state.sections = action.payload;
    },
  },
});

export const { addSection, removeSection, reArrangeSections } = sectionSlice.actions;
export default sectionSlice.reducer;