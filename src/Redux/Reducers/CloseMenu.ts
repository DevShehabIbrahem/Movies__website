import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MoviesT } from "../../common/typed";
import { RootState } from "../store";

type MoveisType = {
  closeMenuState: boolean;
};

const initialState = {
  closeMenuState: true,
} as MoveisType;

const CloseMenu = createSlice({
  name: "Genres",
  initialState,
  reducers: {
    MenuChange: (state, { payload }) => {
      state.closeMenuState = payload;
    },
  },
});
export const closeM = (state: RootState) => state.CloseState.closeMenuState;
export const { MenuChange } = CloseMenu.actions;
export default CloseMenu.reducer;
