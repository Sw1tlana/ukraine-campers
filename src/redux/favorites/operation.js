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
                    ...filters 
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

