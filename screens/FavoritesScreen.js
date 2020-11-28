import React from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import DefaultText from "../components/DefaultText";

import MealList from "../components/MealList";

import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";

const FavoritesScreen = (props) => {
  const favData = useSelector((state) => state.meals.favoriteMeals);

  if (favData.length === 0 || !favData) {
    return (
      <View style={styles.content}>
        <DefaultText>
          No favorite meals found. Adding some favorites
        </DefaultText>
      </View>
    );
  }

  return <MealList listData={favData} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Favorites!!!",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default FavoritesScreen;
