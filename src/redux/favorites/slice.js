import { createSlice } from "@reduxjs/toolkit";
import { getCamper } from "./operation";

export const initialStateCar = {
    cars: { campers: [] },
    isLoading: false,
    error: null,
    favoriteCar: [],
    filters: {},
    page: 1,
    limit: 4,
    totalPages: 0
}

const handlePending = (state) => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
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
             state.filters = { location: '', details: [], form: '' };
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

    const { campers, total } = action.payload;
    state.totalPages = total ? Math.ceil(total / state.limit) : 1;

            if (Array.isArray(campers)) {
                state.cars.campers = state.page === 1
                    ? campers
                    : [...state.cars.campers, ...campers];
            }
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