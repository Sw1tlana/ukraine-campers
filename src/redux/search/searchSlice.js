import { createSlice } from '@reduxjs/toolkit';
import { searchCampers } from './operations';

const initialState = {
  cars: { campers: [] },
  isLoading: false,
  error: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null; 
      })
      .addCase(searchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cars.campers = action.payload;
      })
      .addCase(searchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const searchReducer = searchSlice.reducer;