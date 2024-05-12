import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type TPartner = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type TPartners = {
  data: TPartner[];
  page: number;
  per_page: number | null;
  total: number | null;
  total_pages: number;
};

interface IPartnersState extends TPartners {
  loading: boolean;
  error: string | null;
}

const initialState: IPartnersState = {
  data: [],
  page: 1,
  per_page: null,
  total: null,
  total_pages: 1,
  loading: true,
  error: null,
};

export const loadPartners = createAsyncThunk(
  "load-partners",
  async (page: number = 1, thunkApi) => {
    try {
      const resp = await fetch(
        `https://reqres.in/api/users?page=${page}&delay=3`
      );

      if (!resp.ok) return thunkApi.rejectWithValue("Что-то пошло не так...");

      return resp.json();
    } catch (err) {
      thunkApi.rejectWithValue("failed to load data");
    }
  }
);

export const partnersSlice = createSlice({
  name: "partners",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    resetPartners: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPartners.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadPartners.fulfilled, (state, action) => {
        const { data, per_page, total, total_pages } = action.payload;

        state.data = [...state.data, ...data];
        state.per_page = per_page;
        state.total = total;
        state.total_pages = total_pages;

        state.loading = false;
      })
      .addCase(loadPartners.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Что-то пошло не так";
      });
  },
});

export const { setPage, resetPartners } = partnersSlice.actions;
export default partnersSlice.reducer;
