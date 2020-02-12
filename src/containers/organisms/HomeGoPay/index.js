import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import GopayFeature from "../../../components/moleculs/GopayFeature";

class HomeGoPay extends Component {
  render() {
    return (
      <View style={{ marginHorizontal: 17, marginTop: 8 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            padding: 14,
            backgroundColor: "blue",
            backgroundColor: "#2C5FB8"
          }}
        >
          <Image source={require("../../../assets/icon/gopay.png")} />
          <Text style={{ fontSize: 17, color: "white", fontWeight: "bold" }}>
            Rp. 50.000
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingTop: 20,
            paddingBottom: 14,
            backgroundColor: "#2F65BD",
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4
          }}
        >
          <GopayFeature
            img={require("../../../assets/icon/pay.png")}
            text={"Pay"}
          />
          <GopayFeature
            img={require("../../../assets/icon/topup.png")}
            text={"Topup"}
          />
          <GopayFeature
            img={require("../../../assets/icon/nearby.png")}
            text={"Nearby"}
          />
          <GopayFeature
            img={require("../../../assets/icon/more.png")}
            text={"More"}
          />
        </View>
        <View />
      </View>
    );
  }
}

export default HomeGoPay;
