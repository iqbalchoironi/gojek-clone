import React, { Component } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import ScrollableItems from "../../../components/moleculs/ScrollableItems";

class ScrollableProducts extends Component {
  render() {
    return (
      <View style={{ padding: 16 }}>
        <View
          style={{
            height: 15,
            width: 60,
            marginLeft: 0
          }}
        >
          <Image
            source={require("../../../assets/logo/go-food.png")}
            style={{
              width: undefined,
              height: undefined,
              resizeMode: "contain",
              flex: 1
            }}
          ></Image>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 16
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "#1C1C1C" }}>
            Nearby Restauran
          </Text>
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "#61A756" }}>
            See All
          </Text>
        </View>
        <ScrollView horizontal style={{ flexDirection: "row" }}>
          <ScrollableItems
            title={"KFC Dramaga"}
            img={require("../../../assets/dummy/go-food-kfc.jpg")}
          />
          <ScrollableItems
            title={"Bakmi GM Dramaga"}
            img={require("../../../assets/dummy/go-food-gm.jpg")}
          />
          <ScrollableItems
            title={"Orinds Dramaga"}
            img={require("../../../assets/dummy/go-food-orins.jpg")}
          />
          <ScrollableItems
            title={"Pak Boss Cibanteng"}
            img={require("../../../assets/dummy/go-food-pak-boss.jpg")}
          />
          <ScrollableItems
            title={"Martabak Banka Bara"}
            img={require("../../../assets/dummy/go-food-banka.jpg")}
          />
        </ScrollView>
        <View
          style={{
            borderBottomColor: "#E8E9ED",
            borderBottomWidth: 1,
            marginTop: 16
          }}
        ></View>
      </View>
    );
  }
}

export default ScrollableProducts;
