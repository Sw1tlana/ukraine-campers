import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

const API_URL = 'http://localhost:3000/api';

export const getCamper = createAsyncThunk("camper/fetchAll",
    async ({page, limit, filters }, thunkAPI) => {
        try {
            const response = await axios.get(`${API_URL}/campers`, {
                params: {
                    page,
                    limit,
                    ...filters
                }
            });
            toast.success("Camper data fetched successfully!");
            return response.data;
        } catch (error) {
            toast.error("Failed to fetch camper data.");
             console.error("Error response:", error.response);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

