import { createSlice } from "@reduxjs/toolkit";
import { getCamper } from "./operation";

export const initialStateCar = {
    cars: [],
    isLoading: false,
    error: null,
    favoriteCar: [],
    filters: {
        location: '',
        details: [],
        form: ''
    } 
}

const carsSlice = createSlice({
    name: 'camper',
    initialState: initialStateCar,

    reducers: {
        addFavorite: {
            reducer(state, action) {
                state.favoriteCar.push(action.payload);
            },
            prepare(values) {
                return {
                    payload: {
                        ...values,
                    }
                };
            }
        },
        deleteFavorite: (state, action) => {
            state.favoriteCar = state.favoriteCar.filter(car =>
                car._id !== action.payload
            );
        },
        setFilters: (state, action) => {
            state.filters = action.payload;
        },
        resetFilters: (state) => {
            state.filters = {};
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(getCamper.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCamper.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.cars = action.payload;
            })
            .addCase(getCamper.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

export const carsReducer = carsSlice.reducer;
export const { addFavorite, deleteFavorite, setFilters, resetFilters } = carsSlice.actions;