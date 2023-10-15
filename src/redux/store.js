import AsyncStorage from "@react-native-async-storage/async-storage";
import userReducer from "./userSlice";
import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';

const persistConfig = {
  storage: AsyncStorage,
  key: 'root',
};

const rootReducer = combineReducers({
  user: userReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
