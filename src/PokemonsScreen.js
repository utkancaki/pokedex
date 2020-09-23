import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PokemonsScreen = ({ navigation }) => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((response) => response.json())
      .then((pokemons) => setPokemons(pokemons.results));
  };

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
        }}
      >
        <View style={styles.searchBar}>
          <Ionicons
            name="ios-search"
            style={styles.searchIcon}
            onPress={() => navigation.goBack()}
          />
          <TextInput
            style={styles.search}
            placeholder="Search Pokemons..."
            onChangeText={(value) => setSearch(value)}
            value={search}
          />
        </View>
        <Ionicons
          name="ios-heart-empty"
          style={styles.heartIcon}
          onPress={() => navigation.navigate("Saved")}
        />
      </View>
      <ScrollView>
        <View style={styles.container}>
          {pokemons
            .filter((pokemon) =>
              pokemon.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((pokemon, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.5}
                  key={index}
                  style={styles.pokemon}
                  onPress={() =>
                    navigation.navigate("Details", {
                      pokemon: pokemon.name,
                    })
                  }
                >
                  <View>
                    <Image
                      style={{ width: 120, height: 120 }}
                      source={{
                        uri: `https://img.pokemondb.net/sprites/diamond-pearl/normal/${pokemon.name}.png`,
                      }}
                    />
                  </View>
                  <View>
                    <Text style={styles.pokeName}>{pokemon.name}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
        </View>
        <View style={{ height: 80 }}></View>
      </ScrollView>
    </View>
  );
};

export default PokemonsScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  searchIcon: {
    fontSize: 30,
    color: "#c7c7c7",
  },
  heartIcon: {
    fontSize: 30,
    marginTop: 40,
    color: "tomato",
  },
  pokemon: {
    display: "flex",
    alignItems: "center",
    borderRadius: 5,
    margin: 10,
    padding: 10,
    borderColor: "tomato",
    borderWidth: 1,
    borderRadius: 5,
    shadowColor: "#000",
  },
  searchBar: {
    alignSelf: "center",
    marginTop: 30,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "tomato",
    alignItems: "center",
    width: Dimensions.get("window").width / 1.5,
  },
  search: {
    height: 40,
    marginLeft: 10,
    fontSize: 16,
    width: Dimensions.get("window").width / 2,
  },
  pokeName: {
    fontSize: 16,
    textTransform: "capitalize",
  },
});
