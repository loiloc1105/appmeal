import React from 'react'
import { StyleSheet, Text, View, Button  } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'

// import Colors from '../contants/colors';

const CategoriesMealScreen = (props) => {
    //lay params id ben categoryscreen sang
    const catId = props.navigation.getParam('categoryID')
    //so sanh id lay dc tu database
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

    return (
        <View style={styles.container}>
            <Text>CategoriesMealScreen</Text>
            {/* sau khi so sanh lay title trong database */}
            <Text>{selectedCategory.title}</Text>
            <Button title="Go to Detail Meal" onPress={() => { props.navigation.navigate('MealDetail') }} />
            <Button title="Go back" onPress={() => { props.navigation.goBack() }} />
            {/* <Button title="Go back" onPress={() =>{props.navigation.pop()}} /> */}
            {/* <Button title="Go to Detail Meal" onPress={() =>{props.navigation.navigate('Category')}}/> */}
            {/* <Button title="Go to Detail Meal" onPress={() =>{props.navigation.push('Category')}}/> */}
        </View>
    )
}

// chinh navigaiton title
CategoriesMealScreen.navigationOptions = (navigationData) => {
    // console.log(navigationData);
    const catID = navigationData.navigation.getParam('categoryID')
    const selectCategory = CATEGORIES.find(cate => cate.id === catID);

    return {
        headerTitle: selectCategory.title,
    }
}



export default CategoriesMealScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
