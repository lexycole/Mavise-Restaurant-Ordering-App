import React from "react";
import { View, Text } from "react-native";
import {Divider} from "react-native-elements";
export default function OrderItem() {
  return (
      <View style={{flex:1}}>
          <View style={{marginTop:10}}>
            <Text style={{fontSize: 32, fontWeight: "bold", textAlign:"center"}}>My Order List!</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 20,
              borderBottomWidth: 1,
              borderBottomColor: "#999",
            }}>
            <Text style={{ fontWeight: "600", fontSize: 16 }}>Jollof Rice</Text>
            <Text style={{ opacity: 0.7, fontSize: 16 }}> #500.00</Text>
          </View>
          {/* <Divider style={{width: 0.8}}/> */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 20,
              borderBottomWidth: 1,
              borderBottomColor: "#999",
            }}>
            <Text style={{ fontWeight: "600", fontSize: 16 }}>Spaghetti</Text>
            <Text style={{ opacity: 0.7, fontSize: 16 }}> #560.00</Text>
          </View>
          <Divider style={{width: 0.8}}/>
          <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
          borderBottomWidth: 1,
          borderBottomColor: "#999",
        }}>
        <Text style={{ fontWeight: "600", fontSize: 16 }}>Total</Text>
        <Text style={{ opacity: 0.7, fontSize: 16 }}> #1060.00</Text>
      </View>
      </View>
  );
}