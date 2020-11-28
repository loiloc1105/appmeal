import React, { useEffect, useCallback } from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Alert
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import { toggleFavorites } from "../store/actions/meals";

const { width, height } = Dimensions.get("window");

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailScreen = (props) => {
  const avilableMeals = useSelector((state) => state.meals.meals);
  const mealId = props.navigation.getParam("mealId");
  const currentFavMeal = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === mealId)
  );

  const selectMealId = avilableMeals.find((meal) => meal.id === mealId);

  const dispatch = useDispatch();
  const toggleFavoritesHandler = useCallback(() => {
    dispatch(toggleFavorites(selectMealId.id));
    // Alert.alert('Mark favorite succcess!!!')
  }, [dispatch, selectMealId.id]);

  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavoritesHandler });
    props.navigation.setParams({ isFav: currentFavMeal });
    // props.navigation.setParams({ mealsTitle : selectMealId.title})
  }, [toggleFavoritesHandler, currentFavMeal]);

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
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const toggleFav = navigationData.navigation.getParam("toggleFav");
  const isFavMeal = navigationData.navigation.getParam("isFav");
  // const selectMealId = MEALS.find((meal) => meal.id === mealId);

  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName={isFavMeal ? "ios-star" : "ios-star-outline"}
          onPress={toggleFav}
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
  listItem: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginHorizontal: width * 0.05,
    marginVertical: width * 0.02,
    padding: width * 0.05
  }
});
export default MealDetailScreen;
