import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import commonReducer from "./common/commonSlice";
import postsReducer from "./posts/postsSlice";
import commentsReducer from "./comments/commentsSlice";
import storage from 'redux-persist/lib/storage';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

const allreducers = combineReducers({
    common: commonReducer,
    auth: authReducer,
    posts: postsReducer,
    comments: commentsReducer
});

const persistConfig = {
    key: "root",
    version: 1,
    storage,
    whitelist: ['auth']
};

const persistedReducer = persistReducer(persistConfig, allreducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
            serializableCheck: false
        }),
});

export const persistor = persistStore(store);