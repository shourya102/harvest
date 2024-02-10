import {configureStore} from "@reduxjs/toolkit";
import themeReducer from "../features/themeSlice.js";
import userReducer from "../features/userSlice.js";

export default configureStore({
    reducer: {
        theme: themeReducer,
        user: userReducer,
    },
});
