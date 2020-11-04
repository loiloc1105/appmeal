import React from 'react'
import { StyleSheet, Text, View , Button } from 'react-native'

const MealDetailScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>MealDetailScreen</Text>
            <Button title="Go to Top" onPress={ () => {props.navigation.popToTop()}} />
            <Button title="Go back" onPress={ () =>{props.navigation.pop()}} />
        </View>
    )
}

export default MealDetailScreen


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
