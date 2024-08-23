

export const selectSearchCampers = (state) => state.search.campers;
export const selectSearchLoading = (state) => state.search.isLoading;

// export const selectFilteredCampers = createSelector(
//   [selectSearchCampers, (state) => state.favorite.filters || {}],
//   (campers, filters) => {
//      console.log('Filters in selector:', filters); 
//     console.log('Campers in selector:', campers); 
//     if (!filters.location) return campers;
//     return campers.filter(camper =>
//       camper.location.toLowerCase().includes(filters.location.toLowerCase())
//     );
//   }
// );