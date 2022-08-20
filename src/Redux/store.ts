import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import Genres from "./Reducers/Genres";
import MoviesDSlice from "./Reducers/MoviesDSlice";
import SearchSlice from "./Reducers/SearchSlice";

export const store = configureStore({
  reducer: {
    Details: MoviesDSlice,
    searchState: SearchSlice,
    Genresfilter: Genres,
  },
});

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
