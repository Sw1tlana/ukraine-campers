import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

export const getCamper = createAsyncThunk("camper/fetchAll",
    async ({page, limit, filters }, thunkAPI) => {
        try {
            const response = await axios.get('https://669ce4de15704bb0e3048ae2.mockapi.io/adverts', {
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
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

