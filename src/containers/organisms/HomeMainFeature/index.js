import React, { Component } from "react";
import { View } from "react-native";
import MainFeature from "../../../components/moleculs/MainFeature";
class HomeMainFeature extends Component {
  render() {
    return (
      <View style={{ flexDirection: "row", marginTop: 18 }}>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            width: "100%",
            marginBottom: 18,
            flexWrap: "wrap"
          }}
        >
          <MainFeature
            img={require("../../../assets/icon/go-ride.png")}
            title={"GO Ride"}
          />
          <MainFeature
            img={require("../../../assets/icon/go-car.png")}
            title={"GO Car"}
          />
          <MainFeature
            img={require("../../../assets/icon/go-bluebird.png")}
            title={"GO Bluebird"}
          />
          <MainFeature
            img={require("../../../assets/icon/go-send.png")}
            title={"GO Send"}
          />
          <MainFeature
            img={require("../../../assets/icon/go-deals.png")}
            title={"GO Deals"}
          />
          <MainFeature
            img={require("../../../assets/icon/go-pulsa.png")}
            title={"GO Pulsa"}
          />
          <MainFeature
            img={require("../../../assets/icon/go-food.png")}
            title={"GO Food"}
          />
          <MainFeature
            img={require("../../../assets/icon/go-more.png")}
            title={"More"}
          />
        </View>
      </View>
    );
  }
}

export default HomeMainFeature;
