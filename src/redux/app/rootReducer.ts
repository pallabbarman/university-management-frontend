import { combineReducers } from '@reduxjs/toolkit';
import baseApi from '../features/api';

const rootReducer = combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
});

export default rootReducer;
