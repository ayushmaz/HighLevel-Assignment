import { configureStore } from '@reduxjs/toolkit';
import sectionsReducer from './src/reducers/sectionsReducer';
import rowsReducer from './src/reducers/rowsReducer';
import columnsReducer from './src/reducers/columnsReducer';
import elementsReducer from './src/reducers/elementsReducer';
import platformReducer from './src/reducers/platformReducer';

const store = configureStore({
  reducer: {
    platform: platformReducer,
    sections: sectionsReducer,
    rows: rowsReducer,
    columns: columnsReducer,
    elements: elementsReducer
  },
});

export default store;