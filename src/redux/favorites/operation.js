import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import axios from '../../helpers/axiosConfig';

export const getCamper = createAsyncThunk("camper/getCamper",
    async ({ page, limit, filters = {} }, thunkAPI) => {
        console.log('Fetching campers with filters:', { page, limit, ...filters });
        try {
            const response = await axios.get(`/campers`, {
                params: {
                    page,
                    limit,
                    ...filters // Додає фільтри до запиту
                }
            });
            toast.success("Camper data fetched successfully!");
            console.log('API Response:', response.data);
            return response.data;
        } catch (error) {
            toast.error("Failed to fetch camper data.");
            console.error("Error response:", error.response || error.message);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const searchCampers = createAsyncThunk("search/searchCamper",
    async ({ page, limit, filters }, thunkAPI) => {
        console.log('Request Params:', { page, limit, ...filters });
        try {
            const response = await axios.get('/search', {
               params: { location: filters.location },
            });
            toast.success("Camper data fetched successfully!");
            console.log('API Response:', response.data);
            return response.data;
        } catch (error) {
            toast.error("Failed to fetch camper data.");
            console.error("Error response:", error.response || error.message);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
