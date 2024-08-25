import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import axios from '../../helpers/axiosConfig';

export const getCamper = createAsyncThunk("camper/getCamper",
    async ({ page, limit, filters = {} }, thunkAPI) => {
        try {
            const response = await axios.get(`/campers`, {
                params: {
                    page,
                    limit,
                    ...filters 
                }
            });
            toast.success("Camper data fetched successfully!🤗");
            return response.data;
        } catch (error) {
            toast.error("Failed to fetch camper data.");
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

