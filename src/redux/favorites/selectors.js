export const selectCars = (state) => state.favorite.cars;
export const selectFavoriteCars = (state) => state.favorite.favoriteCar;
export const selectLoading = (state) => state.favorite.isLoading;
export const selectError = (state) => state.favorite.error;
export const selectTotalPages = (state) => state.favorite.totalPages;
export const selectPage = (state) => state.favorite.page;
export const selectFilters = (state) => state.favorite.filters;
export const selectLimit = (state) => state.favorite.limit;
