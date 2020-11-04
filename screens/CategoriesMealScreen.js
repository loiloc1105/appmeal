import React from 'react'
import { StyleSheet, Text, View , Button } from 'react-native'

const CategoriesMealScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>CategoriesMealScreen</Text>
            <Button title="Go to Detail Meal" onPress={ () =>{props.navigation.navigate('MealDetail')}}/>
            <Button title="Go back" onPress={ () =>{props.navigation.goBack()}} />
            {/* <Button title="Go back" onPress={ () =>{props.navigation.pop()}} /> */}
            {/* <Button title="Go to Detail Meal" onPress={ () =>{props.navigation.navigate('Category')}}/> */}
            {/* <Button title="Go to Detail Meal" onPress={ () =>{props.navigation.push('Category')}}/> */}
        </View>
    )
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
