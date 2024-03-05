import { createSlice } from "@reduxjs/toolkit";
import TokenService from "../services/TokenService.js";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedIn: !!localStorage.getItem("user"),
    username: localStorage.getItem("user")
      ? localStorage.getItem("user").username
      : "",
    isFarmer: TokenService.getUser() ? TokenService.getUser().isFarmer : false,
    profile: localStorage.getItem("profile")
      ? localStorage.getItem("profile")
      : null,
    updated: false,
  },
  reducers: {
    login: (state) => {
      if (!!TokenService.getUser()) {
        const user = TokenService.getUser();
        state.username = user.username;
        state.isFarmer = user.isFarmer;
      }
      state.loggedIn = true;
    },
    logout: (state) => {
      state.loggedIn = false;
    },
    setProfile: (state, profile) => {
      state.profile = profile.payload;
    },
    refreshFarmer: (state) => {
      if (!!TokenService.getUser()) {
        const user = TokenService.getUser();
        user.isFarmer = true;
        TokenService.setUser(user);
        state.isFarmer = !!TokenService.getUser()
          ? TokenService.getUser().isFarmer
          : false;
      }
    },
    updatedFlagSet: (state) => {
      state.updated = true;
    },
    updatedFlagUnset: (state) => {
      state.updated = false;
    },
  },
});

export const {
  login,
  logout,
  refreshFarmer,
  setProfile,
  updatedFlagSet,
  updatedFlagUnset,
} = userSlice.actions;
export const selectLoggedIn = (state) => state.user.loggedIn;
export const selectUsername = (state) => state.user.username;
export const selectIsFarmer = (state) => state.user.isFarmer;
export const selectProfile = (state) => state.user.profile;
export const selectUpdated = (state) => state.user.updated;
export default userSlice.reducer;
