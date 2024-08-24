import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../helpers/axiosConfig';

export const searchCampers = createAsyncThunk(
  'favorites/searchCampers',
    async ({ page = 1, limit = 4, filters = {}, location = '' }, { rejectWithValue }) => {
    try {
      const params = { page, limit, ...filters, location };
  
      const response = await axios.get('/search', { params });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
