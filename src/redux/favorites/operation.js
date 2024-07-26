import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCamper = createAsyncThunk("camper/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('https://669ce4de15704bb0e3048ae2.mockapi.io/adverts');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

