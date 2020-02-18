import React, { Component } from "react";

import { View, Platform, StatusBar, ScrollView } from "react-native";

import SearchFeature from "../../../components/moleculs/SearchFeature";
import NavBar from "../../../containers/organisms/NavBar";
import HomeGoPay from "../../../containers/organisms/HomeGoPay";
import HomeMainFeature from "../../../containers/organisms/HomeMainFeature";
import GoNews from "../../../components/moleculs/GoNews";
import GoInfo from "../../../components/moleculs/GoInfo";
import GoBanner from "../../../components/moleculs/GoBanner";
import ScrollableProducts from "../../../containers/organisms/ScrollableProducts";

class Home extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === "ios" ? 20 : StatusBar.currentHeight + 15,
          backgroundColor: "white"
        }}
      >
        <SearchFeature />
        <ScrollView>
          <View style={{ flex: 1, backgroundColor: "white" }}>
            <HomeGoPay />
            <HomeMainFeature />
            {/* <View
              style={{ height: 17, backgroundColor: "#F2F2F4", marginTop: 20 }}
            ></View> */}
            <GoNews
              onPress={() => this.props.navigation.navigate("NewsDetail")}
            />
            <GoBanner />
            <GoInfo />
            <ScrollableProducts />
          </View>
        </ScrollView>
        <NavBar />
      </View>
    );
  }
}

export default Home;
