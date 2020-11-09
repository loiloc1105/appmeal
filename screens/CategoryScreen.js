import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'

import { CATEGORIES } from '../data/dummy-data';
import CategoriesGridTile from '../components/CategoriesGridTile';


const CategoryScreen = (props) => {

    const renderGrid = (itemData) => {
        return <CategoriesGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onSelect={() =>
                props.navigation.navigate({
                    routeName: 'CatogoriesMeal',
                    params: {
                        categoryID: itemData.item.id
                    }
                })
            } />
    }

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item, index) => item.id}
            numColumns={2}
            renderItem={renderGrid}
        />
    )
}

CategoryScreen.navigationOptions = {
    headerTitle: 'Meal Categories'
}

export default CategoryScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
