import userReducer from "./userSlice";
import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk'

const store = configureStore({
    reducer: {
      user: userReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});

export default store;
