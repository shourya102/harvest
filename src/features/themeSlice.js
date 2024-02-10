import {createSlice} from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        currentTheme: !!localStorage.getItem("theme"),
    },
    reducers: {
        darkTheme: (state) => {
            localStorage.setItem("theme", "dark");
            state.currentTheme = "dark-theme";
        },
        lightTheme: (state) => {
            localStorage.setItem("theme", "");
            state.currentTheme = "";
        },
    },
});

export const {darkTheme, lightTheme} = themeSlice.actions;
export const selectTheme = (state) => state.currentTheme;
export default themeSlice.reducer;
