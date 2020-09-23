import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SavedScreen = ({ navigation }) => {
  return (
    <View>
        <Ionicons
          name="ios-arrow-back"
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.header}>Saved Pokemons</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backIcon: {
    fontSize: 32,
    marginTop: 40,
    marginLeft: 20,
    color: "tomato",
  },
  header: {
    position: 'absolute',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 44,
    justifyContent: 'center',
    color: 'tomato'
  }
});

export default SavedScreen;
