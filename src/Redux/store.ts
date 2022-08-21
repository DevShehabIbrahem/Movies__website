import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import CloseMenu from "./Reducers/CloseMenu";
import Genres from "./Reducers/Genres";
import MoviesDSlice from "./Reducers/MoviesDSlice";
import SearchSlice from "./Reducers/SearchSlice";
export const store = configureStore({
  reducer: {
    Details: MoviesDSlice,
    searchState: SearchSlice,
    Genresfilter: Genres,
    CloseState: CloseMenu,
  },
});

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
