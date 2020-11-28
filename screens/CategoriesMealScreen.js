import React from "react";
import { StyleSheet, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { useSelector } from "react-redux";

// import Colors from '../contants/colors';
import DefaultText  from "../components/DefaultText";
import MealList from "../components/MealList";

const CategoriesMealScreen = (props) => {
  //lay params id ben categoryscreen sang
  const catId = props.navigation.getParam("categoryID");
  //so sanh id lay dc tu database
  // const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

  const avilableMeals = useSelector((state) => state.meals.filterMeals);

  // filter trong data MEAL
  const displayMeal = avilableMeals.filter(
    (meals) => meals.categoryID.indexOf(catId) >= 0
  );

  if(displayMeal.length === 0) {
    return (
      <View style={styles.content} >
        <DefaultText>No meals found, check filter again!!!</DefaultText>
      </View>
    );
  }

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

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoriesMealScreen;
