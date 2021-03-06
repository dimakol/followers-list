import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/user-slice";
import followersSlice from "./followers/followers-slice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    followers: followersSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
