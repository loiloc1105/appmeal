import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";

// import Colors from '../contants/colors';

import MealItem from "../components/MealItem";

const CategoriesMealScreen = (props) => {
  //lay params id ben categoryscreen sang
  const catId = props.navigation.getParam("categoryID");
  //so sanh id lay dc tu database
  // const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

  // filter trong data MEAL
  const displayMeal = MEALS.filter(
    (meals) => meals.categoryID.indexOf(catId) >= 0
  );

  const renderItemMeals = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: itemData.item.id
            }
          });
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeal}
        keyExtractor={(item, index) => item.id}
        renderItem={renderItemMeals}
      />

      {/* 
            <Text>CategoriesMealScreen</Text>
            sau khi so sanh lay title trong database
            <Text>{selectedCategory.title}</Text>
            <Button title="Go to Detail Meal" onPress={() => { props.navigation.navigate('MealDetail') }} />
            <Button title="Go back" onPress={() => { props.navigation.goBack() }} />
            <Button title="Go back" onPress={() =>{props.navigation.pop()}} />
            <Button title="Go to Detail Meal" onPress={() =>{props.navigation.navigate('Category')}}/>
            <Button title="Go to Detail Meal" onPress={() =>{props.navigation.push('Category')}}/> */}
    </View>
  );
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
