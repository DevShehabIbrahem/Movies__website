import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MoviesT } from "../../common/typed";
import { RootState } from "../store";

export const SearchMovies = createAsyncThunk<MoviesT[], any>(
  "search/SearchSlice",
  async (term: string) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&include_adult=false&query=${term}`
    );
    const data: MoviesT[] = await res.json();
    return data;
  }
);

type MoveisType = {
  status: "loading" | "idle";
  SearchResult: any;
};

const initialState = {
  SearchResult: [],

  status: "idle",
} as MoveisType;

const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(SearchMovies.fulfilled, (state, { payload }) => {
      state.SearchResult = payload;
      state.status = "idle";
    });
  },
});
export const SearchState = (state: RootState) => state.searchState.SearchResult;

export default SearchSlice.reducer;
