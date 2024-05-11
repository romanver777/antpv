import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/auth";

export const store = configureStore({
  reducer: {
    auth,
  },
  devTools: true,
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
