import React from "react";
import { View, Text,StyleSheet, TouchableOpacity } from "react-native";
import OrderItem from "../components/OrderItem"
export default function ViewCart({navigation}) {
  return (
      <View style={styles.container}>
          <OrderItem />
          <TouchableOpacity
            onPress={() => navigation.navigate("MyOrderScreen")}>
            <View style ={styles.button}>
                    <Text style ={styles.text}>Check Out</Text>
            </View>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    padding: 10,
    backgroundColor: '#000',
    borderRadius: 20,
    margin: 20
  },
  text: {
    alignItems: "center",
    padding: 10,
    color: "#fff"
  }
});