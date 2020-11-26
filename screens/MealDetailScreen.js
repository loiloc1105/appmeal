import React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import { MEALS } from "../data/dummy-data";

const { width, height } = Dimensions.get("window");

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");
  const selectMealId = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView>
      <Image source={{ uri: selectMealId.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectMealId.duration}m</DefaultText>
        <DefaultText>{selectMealId.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectMealId.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectMealId.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectMealId.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectMealId = MEALS.find((meal) => meal.id === mealId);

  return {
    headerTitle: selectMealId.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log("Marked as favorite");
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  image: {
    width: width,
    height: width * 0.5
  },
  details: {
    flexDirection: "row",
    padding: width * 0.04,
    justifyContent: "space-around"
  },
  title: {
    fontFamily: "open-san-bold",
    fontSize: 22,
    textAlign: "center"
  },
  listItem:{
    borderWidth : 1,
    borderColor : '#ccc',
    marginHorizontal: width * 0.05,
    marginVertical: width * 0.02,
    padding : width * 0.05
  }
});
export default MealDetailScreen;
