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
        console.log('SearchSlice campers:', state.cars); 
      })
      .addCase(searchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Щось пішло не так';
        console.error('Search error:', state.error); 
      });
  },
});

export const searchReducer = searchSlice.reducer;