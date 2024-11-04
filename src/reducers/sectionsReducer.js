import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    sectionsById: {
        'section-1': {
            sectionId: 'section-1',
            sectionName: 'Example Section',
            rows: ['row-1', 'row-2']
        },
        'section-2': {
          sectionId: 'section-2',
          sectionName: 'Example Section',
          rows: []
      }
    },
    sectionsOrder: ['section-1', 'section-2']
}

const sectionSlice = createSlice({
  name: 'sections',
  initialState: initialState,
  reducers: {
    addSection: (state, action) => {
      state.sectionsOrder.push(action.payload);
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