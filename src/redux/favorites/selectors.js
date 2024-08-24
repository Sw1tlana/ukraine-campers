import { selectSearchCampers } from '../search/selectors';
import { createSelector } from '@reduxjs/toolkit';

export const selectCars = (state) => state.favorite.cars;
export const selectFavoriteCars = (state) => state.favorite.favoriteCar;
export const selectLoading = (state) => state.favorite.isLoading;
export const selectError = (state) => state.favorite.error;
export const selectTotalPages = (state) => state.favorite.totalPages;
export const selectPage = (state) => state.favorite.page;
export const selectFilters = (state) => state.favorite.filters|| {};
export const selectLimit = (state) => state.favorite.limit;

export const selectFilteredCampers = createSelector(
  [selectSearchCampers, selectFilters],
  (searchCampers, filters) => {

    if (!filters.location || filters.location === '') {
      return searchCampers.campers;
    }

    return searchCampers.campers.filter(camper => 
      camper.location && camper.location.toLowerCase().includes(filters.location.toLowerCase())
    );
  }
);

