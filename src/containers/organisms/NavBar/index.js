import React, { Component } from "react";
import { View } from "react-native";
import NavBarIcon from "../../../components/moleculs/NavBarIcon";
import { withNavigation } from "react-navigation";

class NavBar extends Component {
  render() {
    return (
      <View style={{ height: 54, flexDirection: "row" }}>
        <NavBarIcon
          active
          title={"Home"}
          img={require("../../../assets/icon/home-active.png")}
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <NavBarIcon
          title={"Orders"}
          img={require("../../../assets/icon/order.png")}
          onPress={() => this.props.navigation.navigate("Orders")}
        />
        <NavBarIcon
          title={"Help"}
          img={require("../../../assets/icon/help.png")}
        />
        <NavBarIcon
          title={"Inbox"}
          img={require("../../../assets/icon/inbox.png")}
        />
        <NavBarIcon
          title={"Account"}
          img={require("../../../assets/icon/account.png")}
        />
      </View>
    );
  }
}

export default withNavigation(NavBar);
