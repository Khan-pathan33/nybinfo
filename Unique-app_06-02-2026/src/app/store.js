import { configureStore } from "@reduxjs/toolkit";
import auth from "../features/authSlice";
import ui from "../features/uiSlice";

export const store = configureStore({
    reducer: {auth, ui},
});