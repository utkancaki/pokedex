import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TextInput, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as SecureStore from "expo-secure-store";

const LoginScreen = ({ navigation }) => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const [mailFromDB, setMailFromDB] = useState();
  const [passwordFromDB, setPasswordFromDB] = useState();

  async function checkData() {
    const mailKey = await SecureStore.getItemAsync("userMail");
    setMailFromDB(JSON.parse(mailKey));
    const passwordKey = await SecureStore.getItemAsync("userPassword");
    setPasswordFromDB(JSON.parse(passwordKey));
    if (mail === mailFromDB && password === passwordFromDB) {
      navigation.navigate("Pokemons");
    } else {
      Alert.alert("Please check your information");
    }
  }


  return (
    <View style={{ flex: 1 }}>
      <View style={styles.searchBar}>
        <Image
          style={{
            width: 120,
            height: 120,
            alignSelf: "center",
            marginTop: 100,
            marginBottom: 20,
          }}
          source={{
            uri: `https://static.wikia.nocookie.net/international-pokedex/images/8/87/Pok%C3%A9_Ball.png/revision/latest/scale-to-width-down/340?cb=20181223194857`,
          }}
        />
        <View style={styles.textArea}>
          <AntDesign name="user" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Enter your mail address..."
            onChangeText={setMail}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.textArea}>
          <AntDesign name="key" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Enter your password..."
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={checkData}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text
            style={{
              fontSize: 16,
              color: "tomato",
              textDecorationLine: "underline",
              alignSelf: "center",
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    marginLeft: 10,
    width: 250,
  },
  textArea: {
    borderBottomWidth: 1,
    borderColor: "tomato",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
    height: 40,
    marginHorizontal: 40,
  },
  icon: {
    fontSize: 30,
    color: "tomato",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "tomato",
    marginHorizontal: 80,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    marginTop: 50,
    marginBottom: 30,
  },
});

export default LoginScreen;
