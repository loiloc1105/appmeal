import React from "react";
import { Platform, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import CategoryScreen from "../screens/CategoryScreen";
import CategoriesMealScreen from "../screens/CategoriesMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FilterScreen from "../screens/FilterScreen";
import Colors from "../contants/colors";
import { Ionicons } from "@expo/vector-icons";

const defaultStackOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "white"
  },
  headerTitleStyle: {
    fontFamily: "open-san-bold"
  },
  headerBackTitleStyle: {
    fontFamily: "open-san-bold"
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  headerTitle: "A screen"
};

const MealNavigator = createStackNavigator(
  {
    Category: {
      screen: CategoryScreen
      // thanh header code o day se de len CategoryScreen
      // navigationOptions :{
      //     headerTitle : 'Meal Detail !!!',
      // }
    },
    CatogoriesMeal: {
      screen: CategoriesMealScreen
    },
    MealDetail: {
      screen: MealDetailScreen
    }
  },
  {
    // animation modal cho ios khi dung mode
    // mode : 'modal',
    // cho man hinh nao khoi chay dau tien
    // initialRouteName : 'Category',
    defaultNavigationOptions: defaultStackOptions
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
  },
  {
    defaultNavigationOptions: defaultStackOptions
  }
);

const tabBottomConfig = {
  Meals: {
    screen: MealNavigator,
    navigationOptions: {
      tabBarIcon: (tabIcon) => {
        return (
          <Ionicons name="ios-restaurant" size={24} color={tabIcon.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-san-bold" }}>Meals</Text>
        ) : (
          "Meals"
        )
    }
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      // tabBarLabel : 'Favoraite!!!',
      tabBarIcon: (tabIcon) => {
        return <Ionicons name="ios-star" size={24} color={tabIcon.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-san-bold" }}>Favorites</Text>
        ) : (
          "Favorites"
        )
    }
  }
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabBottomConfig, {
        activeTintColor: "white",
        shifting: true,
        //barStyle dung khi shifting = false
        barStyle: Colors.primaryColor
      })
    : createBottomTabNavigator(tabBottomConfig, {
        tabBarOptions: {
          labelStyle: {
            fontFamily: "open-san-bold"
          },
          activeTintColor: Colors.accentColor
        }
      });

const FiltersNavigator = createStackNavigator(
  {
    Filters: FilterScreen
  },
  {
    defaultNavigationOptions: defaultStackOptions
  }
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals"
      }
    },
    Filters: FiltersNavigator
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      fontFamily: "open-san-bold"
    }
  }
);

export default createAppContainer(MainNavigator);
