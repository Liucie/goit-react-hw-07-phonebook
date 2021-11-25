
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import { contactsApi } from "../services/contactsApi";
import { filterReducer } from "./contacts/contacts-reducer";

export const store = configureStore({
    reducer:{
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer},
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware(),
        contactsApi.middleware,
    ],
})

setupListeners(store.dispatch)
