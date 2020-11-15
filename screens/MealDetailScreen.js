import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";

import { MEALS } from "../data/dummy-data";

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");
  const selectMealId = MEALS.find((meal) => meal.id === mealId);

  return (
    <View style={styles.container}>
      <Text>{selectMealId.title}</Text>
      <Button
        title="Go to Top"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
      <Button
        title="Go back"
        onPress={() => {
          props.navigation.pop();
        }}
      />
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectMealId = MEALS.find((meal) => meal.id === mealId);

  return {
    headerTitle: selectMealId.title,
    headerRight: () => 
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log("Marked as favorite");
          }}
        />
      </HeaderButtons>
    
  };
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
