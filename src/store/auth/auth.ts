import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { TFormData } from "../../components/sign-up-form/sign-up-form";

interface IAuthState {
  id: number | null;
  token: string | null;
  isAuth: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: IAuthState = {
  id: null,
  token: null,
  isAuth: false,
  loading: true,
  error: null,
};

export const auth = createAsyncThunk(
  "auth",
  async (data: TFormData, thunkApi) => {
    const { email, password } = data;

    try {
      const resp = await fetch("https://reqres.in/api/register/?delay=3", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!resp.ok) {
        const data = await resp.json();
        return thunkApi.rejectWithValue(data.error);
      }

      return { user: { email, password }, data: await resp.json() };
    } catch (err) {
      thunkApi.rejectWithValue(err);
    }
  }
);

export const init = createAsyncThunk("init", async (_, thunkApi) => {
  const data = localStorage.getItem("data");
  const token = localStorage.getItem("token");

  if (data && token) {
    try {
      const resp = await fetch("https://reqres.in/api/login/?delay=3", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-Auth-Token": token,
        },
        body: data,
      });

      if (!resp.ok) {
        const data = await resp.json();
        return thunkApi.rejectWithValue(data.error);
      }

      return { token, data: await resp.json() };
    } catch (err) {
      thunkApi.rejectWithValue(err);
    }
  } else {
    thunkApi.rejectWithValue("Ошибка данных");
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOut: () => {
      localStorage.removeItem("token");

      return { ...initialState, loading: false };
    },
  },
  extraReducers: (builder) => {
    builder
      //register
      .addCase(auth.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(auth.fulfilled, (state, action) => {
        if (action.payload) {
          state.id = action.payload.data.id;
          state.token = action.payload.data.token;
          state.isAuth = true;

          localStorage.setItem(
            "data",
            JSON.stringify({
              email: action.payload.user.email,
              password: action.payload.user.password,
            })
          );
          localStorage.setItem("token", action.payload.data.token);
        }
        state.loading = false;
      })
      .addCase(auth.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      //init
      .addCase(init.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(init.fulfilled, (state, action) => {
        if (
          action.payload &&
          action.payload.data.token === action.payload.token
        ) {
          state.isAuth = true;
          state.token = action.payload.token;
        } else {
          localStorage.removeItem("token");
          localStorage.removeItem("data");
        }

        state.loading = false;
      })
      .addCase(init.rejected, () => {
        localStorage.removeItem("token");
        localStorage.removeItem("data");

        return {
          ...initialState,
          loading: false,
        };
      });
  },
});

export const { signOut } = authSlice.actions;
export default authSlice.reducer;
