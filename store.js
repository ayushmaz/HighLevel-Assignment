import { configureStore } from '@reduxjs/toolkit';
import sectionsReducer from './src/reducers/sectionsReducer';
import rowsReducer from './src/reducers/rowsReducer';

const store = configureStore({
  reducer: {
    sections: sectionsReducer,
    rows: rowsReducer
  },
});

export default store;