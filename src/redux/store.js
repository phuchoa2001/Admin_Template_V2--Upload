import { configureStore } from '@reduxjs/toolkit';

import Auth from './authSlice';

export default configureStore({
    reducer: {
        Auth
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})