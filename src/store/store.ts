import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/auth";
import partners from "./partners/partners";

export const store = configureStore({
  reducer: {
    auth,
    partners,
  },
  devTools: true,
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
