import { createSlice } from "@reduxjs/toolkit";
import { addBookings } from "./operation";

const bookingSlice = createSlice({
   name: "booking",
   initialStateBooking: {
    bookings: [],
    isLoading: false,
    error: null,
},
    extraReducers: (builder) => {
        builder
            .addCase(addBookings.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addBookings.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.bookings.push(action.payload);

            })
            .addCase(addBookings.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});


export const bookingReducer = bookingSlice.reducer;