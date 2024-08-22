import { createSlice } from "@reduxjs/toolkit";
import { getCamper, searchCampers } from "./operation";

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
    console.log('Fetching campers...');
    state.isLoading = true;
};

const handleRejected = (state, action) => {
     console.log('Fetching campers failed:', action.payload); 
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
            console.log('Setting filters:', action.payload); 
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
                 console.log('Camper data fetched:', action.payload); 
                state.isLoading = false;
                state.error = null;

    const {  campers = [], total = 0  } = action.payload;
    state.totalPages = total ? Math.ceil(total / state.limit) : 1;

            if (Array.isArray(campers)) {
                state.cars.campers = state.page === 1
                    ? campers
                    : [...state.cars.campers, ...campers];
            }
        })
            .addCase(getCamper.rejected, handleRejected)
            .addCase(searchCampers.pending, handlePending)
            .addCase(searchCampers.fulfilled, (state, action) => {
                console.log('Search results fetched:', action.payload);
                state.isLoading = false;
                state.error = null;

                const { campers = [], total = 0 } = action.payload;
                state.totalPages = total ? Math.ceil(total / state.limit) : 1;
                state.campers = campers; 

            })
            .addCase(searchCampers.rejected, handleRejected);
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