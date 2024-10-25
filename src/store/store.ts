import { userApi } from "@/api/CreateUserApi";
import { burgerSlice } from "@/slices/burgerMenuSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        burgerSlice: burgerSlice.reducer,
        [userApi.reducerPath]: userApi.reducer,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        userApi.middleware,
        
    )
    
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;