import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'; 
import { persistReducer, persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import userReducer from "./userAuthSlice";

const persistConfig = {
    key: 'docai',
    storage,
};

const persistedUserReducer = persistReducer(persistConfig,userReducer);

const store = configureStore({
    reducer: {
        user: persistedUserReducer,
    },
});

export const persistor = persistStore(store);

export default store;
