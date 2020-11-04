import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Platform } from 'react-native'

import { CATEGORIES } from '../data/dummy-data';

import Colors from '../contants/colors';


const CategoryScreen = (props) => {

    const renderGrid = (itemData) => {
        return (
            // truyen params id sang categoriesmealscreen
            <TouchableOpacity style={styles.gridItem}
                onPress={() => {
                    props.navigation.navigate({
                        routeName: 'CatogoriesMeal',
                        params: {
                            categoryID: itemData.item.id
                        }
                    })
                }}>
                <View >
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        )
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
    headerTitle: 'Meal Categories',
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
}

export default CategoryScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    gridItem: {
        flex: 1,
        margin: 10,
        height: 150
    }
});
