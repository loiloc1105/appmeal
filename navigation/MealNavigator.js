import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import CategoryScreen from "../screens/CategoryScreen";
import CategoriesMealScreen from "../screens/CategoriesMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../contants/colors";

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
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? Colors.primaryColor : "white"
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
      headerTitle: "A screen"
    }
  }
);
export default createAppContainer(MealNavigator);
