import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type TPartner = {
  id: number | null;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

interface IPartnerState {
  data: TPartner;
  loading: boolean;
  error: string | null;
}

const initialState: IPartnerState = {
  data: {
    id: null,
    email: "",
    first_name: "",
    last_name: "",
    avatar: "",
  },
  loading: true,
  error: null,
};

export const loadPartner = createAsyncThunk(
  "loadPartner",
  async (id: string, thunkApi) => {
    const token = localStorage.getItem("token");

    try {
      const resp = await fetch(`https://reqres.in/api/users/${id}`, {
        headers: {
          "X-Auth-Token": token || "",
        },
      });

      if (!resp.ok) return thunkApi.rejectWithValue("Что-то пошло не так...");

      return resp.json();
    } catch (err) {
      thunkApi.rejectWithValue("failed to load data");
    }
  }
);

export const partnerSlice = createSlice({
  name: "partner",
  initialState,
  reducers: {
    resetPartner: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPartner.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadPartner.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.loading = false;
      })
      .addCase(loadPartner.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Что-то пошло не так";
      });
  },
});

export const { resetPartner } = partnerSlice.actions;
export default partnerSlice.reducer;
