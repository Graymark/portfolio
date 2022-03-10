import {configureStore} from '@reduxjs/toolkit';
import AppReducer from './reducers/testReducer';

export default configureStore({
    reducer: {
        app: AppReducer,
    }
})