import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import CategoryScreen from '../screens/CategoryScreen';
import CategoriesMealScreen from '../screens/CategoriesMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealNavigator = createStackNavigator ({
    Category : CategoryScreen,
    CatogoriesMeal : {
        screen : CategoriesMealScreen,
    },
    MealDetail : MealDetailScreen
})
export default createAppContainer(MealNavigator);