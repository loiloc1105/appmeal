import React from "react";

import { CATEGORIES, MEALS } from "../data/dummy-data";

// import Colors from '../contants/colors';

import MealList from "../components/MealList";

const CategoriesMealScreen = (props) => {
  //lay params id ben categoryscreen sang
  const catId = props.navigation.getParam("categoryID");
  //so sanh id lay dc tu database
  // const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

  // filter trong data MEAL
  const displayMeal = MEALS.filter(
    (meals) => meals.categoryID.indexOf(catId) >= 0
  );

  return <MealList listData={displayMeal} navigation={props.navigation} />;
};

// chinh navigation title
CategoriesMealScreen.navigationOptions = (navigationData) => {
  // console.log(navigationData);
  const catID = navigationData.navigation.getParam("categoryID");
  const selectCategory = CATEGORIES.find((cate) => cate.id === catID);

  return {
    headerTitle: selectCategory.title
  };
};

export default CategoriesMealScreen;