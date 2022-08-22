import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type MoveisType = {
  closeMenuState: boolean;
};

const initialState = {
  closeMenuState: false,
} as MoveisType;

const CloseMenu = createSlice({
  name: "ToggleMenu",
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
