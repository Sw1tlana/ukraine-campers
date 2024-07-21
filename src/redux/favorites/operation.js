import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCamper = createAsyncThunk("camper/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('https://6698cac22069c438cd700783.mockapi.io/adverts');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);