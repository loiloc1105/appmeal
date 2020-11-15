import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions
} from "react-native";

const { width, height } = Dimensions.get("window");

const MealItem = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View style={{ ...styles.mealRow, ...styles.headerMeal }}>
          <ImageBackground
            source={{ uri: props.image }}
            style={styles.imgBackground}
          >
            <View>
              <Text style={styles.titleMeal} numberOfLines={1}>
                {props.title}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ ...styles.mealRow, ...styles.contentMeal }}>
          <Text>{props.duration}</Text>
          <Text>{props.complexity.toUpperCase()}</Text>
          <Text>{props.affordability.toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: width * 0.04,
    overflow: "hidden",
    marginTop: width * 0.01,
    marginBottom: width * 0.05,
    borderColor: "#BEBEBE",
    width: width * 0.95
  },
  mealRow: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  headerMeal: {
    height: width * 0.5,
    justifyContent: "center"
    // borderWidth: 1
  },
  imgBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  },
  titleMeal: {
    fontFamily: "open-san-bold",
    fontSize: 22,
    color: "white",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: width * 0.05,
    paddingVertical: width * 0.03
  },
  contentMeal: {
    height: width * 0.1,
    backgroundColor: "#f5f5f5",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: width * 0.05
    // borderWidth: 1
  }
});

export default MealItem;
