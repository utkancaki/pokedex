import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const DetailsScreen = ({ navigation, route }) => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  const fetchPokemonDetails = () => {
    const { pokemon } = route.params;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => response.json())
      .then((details) => setDetails(details));
  };

  return details.name ? (
    <View style={{ flex: 1 }}>
      <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
        <Ionicons
          name="ios-arrow-back"
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        />
        <Ionicons name="ios-heart-empty" style={styles.heartIcon} />
      </View>
      <Text style={styles.pokeName}>{details.name}</Text>

      <Image
        style={styles.image}
        source={{
          uri: `https://img.pokemondb.net/sprites/diamond-pearl/normal/${details.name}.png`,
        }}
      />
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <View>
          <Text style={styles.text2}>Height: </Text>
          <Text style={styles.text2}>Weight: </Text>
          <Text style={styles.text2}>Ability: </Text>
          <Text style={styles.text2}>Type: </Text>
        </View>
        <View>
          <Text style={styles.text}>{details.height}</Text>
          <Text style={styles.text}>{details.weight}</Text>
          <Text style={styles.text}>{details.abilities[0].ability.name}</Text>
          <Text style={styles.text}>{details.types[0].type.name}</Text>
        </View>
      </View>
    </View>
  ) : (
    <View style={styles.indicator}>
      <ActivityIndicator size="large" color="#E63F34" />
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  backIcon: {
    fontSize: 32,
    marginTop: 40,
    marginLeft: 20,
    color: "tomato",
  },
  heartIcon: {
    fontSize: 32,
    marginTop: 40,
    right: 20,
    color: "tomato",
  },
  pokeName: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
    color: "tomato",
    position: "absolute",
    marginTop: 45,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
  text: {
    fontSize: 16,
    marginBottom: 15,
    alignSelf: "center",
    textTransform: "capitalize",
  },
  text2: {
    fontSize: 16,
    marginBottom: 15,
    alignSelf: "center",
    fontWeight: "bold",
    color: "tomato",
  },
  indicator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
