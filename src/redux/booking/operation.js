import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

const API_URL = 'http://localhost:3000/api';

export const addBookings = createAsyncThunk(
    "booking/addBooking",
    async (bookingData, thunkAPI) => {
        try {
            const response = await axios.post(`${API_URL}/bookings`, bookingData);
            toast.success('Thank you for choosing us!🤗');
            return response.data;
        } catch (error) {
            toast.error("Oops... 😡");
            return thunkAPI.rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);