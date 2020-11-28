import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  Switch,
  Dimensions,
  Platform
} from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";

import HeaderButton from "../components/HeaderButton";
import Colors from "../contants/colors";
import { setFilters } from "../store/actions/meals";
const { width, height } = Dimensions.get("window");

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.labelSwitch}</Text>
      <Switch
        trackColor={{
          true: Colors.primaryColor,
          false: Platform.OS === "android" ? "lightgray" : ""
        }}
        thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""}
        value={props.stateFilter}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FilterScreen = (props) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegatarian, setIsVegatarian] = useState(false);
  const { navigation } = props;

  const dispatch = useDispatch();

  const SaveFilter = useCallback(() => {
    const applySave = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegatarian
    };
    dispatch(setFilters(applySave));
    // console.log(applySave);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegatarian, dispatch]);

  useEffect(() => {
    navigation.setParams({ save: SaveFilter });
  }, [SaveFilter]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Avaliable Filter/ Retriction</Text>
      <FilterSwitch
        labelSwitch="Gluten-Free"
        stateFilter={isGlutenFree}
        onChange={(newValue) => setIsGlutenFree(newValue)}
      />

      <FilterSwitch
        labelSwitch="Lactose-Free"
        stateFilter={isLactoseFree}
        onChange={(newValue) => setIsLactoseFree(newValue)}
      />

      <FilterSwitch
        labelSwitch="Vegan"
        stateFilter={isVegan}
        onChange={(newValue) => setIsVegan(newValue)}
      />

      <FilterSwitch
        labelSwitch="Vegatarian"
        stateFilter={isVegatarian}
        onChange={(newValue) => setIsVegatarian(newValue)}
      />
    </View>
  );
};

FilterScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Filter Meals",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={navData.navigation.getParam("save")}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  title: {
    fontFamily: "open-san-bold",
    fontSize: 22,
    margin: width * 0.04,
    textAlign: "center"
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: width * 0.8,
    marginVertical: width * 0.02
  }
});

export default FilterScreen;
