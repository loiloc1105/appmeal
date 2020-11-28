import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { useSelector } from 'react-redux'

import MealItem from "./MealItem";

const MealList = (props) => {
  const favMeals = useSelector( state => state.meals.favoriteMeals)

  const renderItemMeals = (itemData) => {
    const favoriteMeals = favMeals.some( meal => meal.id === itemData.item.id)

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
              mealId: itemData.item.id,
              mealTitle : itemData.item.title,
              isFav : favoriteMeals
            }
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderItemMeals}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
