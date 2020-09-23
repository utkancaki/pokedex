import "react-native-gesture-handler";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Alert } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as SecureStore from "expo-secure-store";

const RegisterScreen = ({ navigation }) => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  async function saveUser() {
    if (password && mail) {
      SecureStore.setItemAsync("userMail", JSON.stringify(mail));
      SecureStore.setItemAsync("userPassword", JSON.stringify(password));
      Alert.alert("Succesfully Registered!");
      navigation.navigate("Login");
    } else {
      Alert.alert("Please fill the blanks");
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <Ionicons
        name="ios-arrow-back"
        style={styles.backIcon}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.searchBar}>
        <Image
          style={{
            width: 120,
            height: 120,
            alignSelf: "center",
            marginTop: 30,
            marginBottom: 20,
          }}
          source={{
            uri: `https://static.wikia.nocookie.net/international-pokedex/images/3/34/Ultra_Ball.png/revision/latest?cb=20190318162717`,
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
        <TouchableOpacity style={styles.button} onPress={saveUser}>
          <Text style={styles.buttonText}>Register</Text>
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
  backIcon: {
    fontSize: 32,
    marginTop: 40,
    marginLeft: 20,
    color: "#E6B23A",
  },
  textArea: {
    borderBottomWidth: 1,
    borderColor: "#E6B23A",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
    height: 40,
    marginHorizontal: 40,
  },
  icon: {
    fontSize: 30,
    color: "#E6B23A",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#E6B23A",
    marginHorizontal: 80,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    marginTop: 50,
  },
});

export default RegisterScreen;
