import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Platform, TouchableNativeFeedback , Dimensions} from 'react-native'

const { width, height} = Dimensions.get("window");
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
        margin: width * 0.035,
        height: width * 0.35,
        borderRadius: width * 0.03,
        overflow: Platform.OS === 'android' && Platform.OS >= 21 ? 'hidden' : 'visible',
        elevation: width * 0.03,
    },
    container: {
        flex: 1,
        borderRadius: width * 0.03,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: width * 0.04,
        padding: width * 0.03,
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

