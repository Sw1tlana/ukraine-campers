import { createSlice } from "@reduxjs/toolkit";
import { getCamper } from "./operation";

export const initialStateCar = {
    cars: [],
    isLoading: false,
    error: null,
    favoriteCar: [],
}

const carsSlice = createSlice({
    name: 'camper',
    initialState: initialStateCar,

    reducers: {
        addFavorite: {
            reducer(state, action) {
                state.favoriteCar.push(action.payload)
            },
            prepare(values) {
                return {
                    payload: {
                        ...values,
                    }
                }
            }
        },
        deleteFavorite: (state, action) => {
            state.favoriteCar = state.favoriteCar.filter(car =>
                car._id !== action.payload
            );
        },
    }
})