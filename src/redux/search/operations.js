import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../helpers/axiosConfig';

export const searchCampers = createAsyncThunk(
  'favorites/searchCampers',
    async ({ page = 1, limit = 4, filters = {}, location = '' }, { rejectWithValue }) => {
    try {
      const params = { page, limit, ...filters, location };
      console.log('Request Params:', params);
      const response = await axios.get('/search', { params });
      console.log('API Response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching campers:', error.response || error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
