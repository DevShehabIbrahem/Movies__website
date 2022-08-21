import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MoviesT } from "../../common/typed";
import { RootState } from "../store";

export const Fetchgenres = createAsyncThunk<MoviesT[], any>(
  "Genres/Fetchgenres",
  async (id: number) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${id}`
    );
    const data: any = await res.json();
    return data.results;
  }
);

type MoveisType = {
  status: "loading" | "idle";
  genresFilter: any;
};

const initialState = {
  genresFilter: [],

  status: "idle",
} as MoveisType;

const Genres = createSlice({
  name: "Genres",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(Fetchgenres.fulfilled, (state, { payload }) => {
      state.genresFilter = payload;
      state.status = "idle";
    });
  },
});
export const selectStatus = (state: RootState) =>
  state.Genresfilter.genresFilter;

export default Genres.reducer;
