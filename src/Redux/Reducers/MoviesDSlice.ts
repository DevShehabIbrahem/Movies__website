import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MoviesT } from "../../common/typed";
import { RootState } from "../store";

export const FetchMoviesDetails = createAsyncThunk<MoviesT[], any>(
  "movie/SearchSlice",
  async (id: number) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=e99375d6ca88c9406621028a59f9ddfe&language=en-US`
    );
    const data: MoviesT[] = await res.json();
    return data;
  }
);

type MoveisType = {
  status: "loading" | "idle";
  MoviesDetails: any;
};

const initialState = {
  MoviesDetails: [],

  status: "idle",
} as MoveisType;

const MoviesDSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(FetchMoviesDetails.fulfilled, (state, { payload }) => {
      state.MoviesDetails = payload;
      state.status = "idle";
    });
  },
});
export const selectStatus = (state: RootState) => state.Details.MoviesDetails;

export default MoviesDSlice.reducer;
