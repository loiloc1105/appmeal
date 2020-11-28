export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const SET_FILTER = "SET_FILTER";

export const toggleFavorites = (id) => {
  return { type: TOGGLE_FAVORITE, mealId: id };
};

export const setFilters = filterSettings => {
    return { type: SET_FILTER, filters: filterSettings };
}
