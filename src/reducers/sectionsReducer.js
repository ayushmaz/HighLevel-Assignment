import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    sectionsById: {
        'section-1': {
            sectionId: 'section-1',
            sectionName: 'Example Section',
            rows: []
        }
    },
    sectionsOrder: ['section-1']
}

const sectionSlice = createSlice({
  name: 'sections',
  initialState: initialState,
  reducers: {
    addSection: (state, action) => {
      const {newSection, sectionIndex} = action.payload
      const {sectionId} = newSection
      let newSections = [...state.sectionsOrder];
      newSections.splice(sectionIndex + 1, 0, newSection.sectionId);
      state.sectionsOrder = newSections
      state.sectionsById[sectionId] = newSection
    },
    reArrangeSections: (state, action) => {
      state.sectionsOrder = action.payload;
    },
    reArrangeRows: (state, action) => {
      const {sectionId, rows} = action.payload || {sectionId: '', rows: []}
      if(!sectionId) return
      const _sectionById = {...state.sectionsById}
      _sectionById[sectionId].rows = rows
      state.sectionsById = _sectionById
    }
  },
});

export const { addSection, removeSection, reArrangeSections, reArrangeRows } = sectionSlice.actions;
export default sectionSlice.reducer;