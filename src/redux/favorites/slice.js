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
    },
    page: 1,
    limit: 4,
    totalPages: 0
}

const handlePending = (state) => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.loading = false;
    state.error = action.payload;
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
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setLimit: (state, action) => {
            state.limit = action.payload;
        },
        setTotalPages: (state, action) => {
            state.totalPages = action.payload;
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(getCamper.pending, handlePending)
            .addCase(getCamper.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.cars = action.payload;
            })
            .addCase(getCamper.rejected, handleRejected)
    }
});

export const carsReducer = carsSlice.reducer;
export const {
    addFavorite,
    deleteFavorite,
    setFilters,
    resetFilters,
    setPage,
    setLimit,
    setTotalPages
} = carsSlice.actions;