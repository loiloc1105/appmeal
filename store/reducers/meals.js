import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE, SET_FILTER } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filterMeals: MEALS,
  favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingIndex >= 0) {
        const updateFavMeal = [...state.favoriteMeals];
        updateFavMeal.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updateFavMeal };
      } else {
        const meal = state.meals.find((meal) => meal.id === action.mealId);
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
      }
    case SET_FILTER:
      const filterMeal = action.filters;
      const updateFilterMeals = state.meals.filter((meal) => {
        if (filterMeal.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (filterMeal.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (filterMeal.vegetarian && !meal.isVegetarian) {
          return false;
        }
        if (filterMeal.vegan && !meal.isVegan) {
          return false;
        }
        return true;
      });
      return { ...state, filterMeals: updateFilterMeals };
    default:
      return state;
  }
};

export default mealsReducer;
