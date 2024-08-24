import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../helpers/axiosConfig';
import toast from 'react-hot-toast';

export const addBookings = createAsyncThunk(
    "booking/addBooking",
    async (bookingData, thunkAPI) => {
        try {
                const dataToSend = {
                name: bookingData.name.trim(),
                email: bookingData.email.trim(),
                bookingDate: new Date(bookingData.bookingDate).toISOString(),
                ...(bookingData.comment && { comment: bookingData.comment.trim() })
            };
            const response = await axios.post('/bookings', dataToSend);
            toast.success('Thank you for choosing us!🤗');
            return response.data;
        } catch (error) {
            toast.error("Oops... 😡");
            return thunkAPI.rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);