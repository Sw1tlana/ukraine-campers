import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

export const addBookings = createAsyncThunk(
    "booking/addBooking",
    async (data, thunkAPI) => {
        try {
            const response = await axios.post('https://6698cac22069c438cd700783.mockapi.io/booking', data);
            toast.success('Thank you for choosing us!🤗');
            return response.data;
        } catch (error) {
            toast.error("Oops... 😡");
            return thunkAPI.rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);