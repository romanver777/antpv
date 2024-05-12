import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/auth";
import partners from "./partners/partners";
import partner from "./partner/partner";

export const store = configureStore({
  reducer: {
    auth,
    partners,
    partner,
  },
  devTools: false,
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
