import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native'

const CategoriesGridTile = (props) => {
    let TouchableNativeFeedbackcpm = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableNativeFeedbackcpm = TouchableNativeFeedback;
    }

    return (
        <View style={styles.gridItem}>
            <TouchableNativeFeedbackcpm style={{flex:1}}
                onPress={props.onSelect}>
                <View style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
                    <Text style={styles.titleText} numberOfLines={2}>{props.title}</Text>
                </View>
            </TouchableNativeFeedbackcpm>
        </View>
    )
}


const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 10,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden'
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    titleText: {
        fontFamily: 'open-san-bold',
        fontSize: 22,
        textAlign: 'right',
    }
})

export default CategoriesGridTile

