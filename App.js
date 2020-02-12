import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Platform,
  StatusBar,
  ScrollView
} from "react-native";

import SearchFeature from "./src/components/moleculs/SearchFeature";
import NavBar from "./src/containers/organisms/NavBar";
import HomeGoPay from "./src/containers/organisms/HomeGoPay";
import HomeMainFeature from "./src/containers/organisms/HomeMainFeature";
import GoNews from "./src/components/moleculs/GoNews";
import GoInfo from "./src/components/moleculs/GoInfo";
import GoBanner from "./src/components/moleculs/GoBanner";
import ScrollableProducts from "./src/containers/organisms/ScrollableProducts";

class App extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === "ios" ? 20 : StatusBar.currentHeight + 15
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
            <GoNews />
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

const styles = StyleSheet.create({});

export default App;
