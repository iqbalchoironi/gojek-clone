import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import iconHome from "./icon/home-active.png";
import iconOrder from "./icon/order.png";
import iconHelp from "./icon/help.png";
import iconInbox from "./icon/inbox.png";
import iconAccount from "./icon/account.png";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "pink" }} />
      <View style={{ height: 54, flexDirection: "row" }}>
        <View
          style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
        >
          <Image style={{ width: 26, height: 26 }} source={iconHome} />
          <Text
            style={{
              color: "#545454",
              fontSize: 10,
              marginTop: 4,
              color: "green"
            }}
          >
            Home
          </Text>
        </View>
        <View
          style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
        >
          <Image style={{ width: 26, height: 26 }} source={iconOrder} />

          <Text style={{ color: "#545454", fontSize: 10, marginTop: 4 }}>
            Orders
          </Text>
        </View>
        <View
          style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
        >
          <Image style={{ width: 26, height: 26 }} source={iconHelp} />

          <Text style={{ color: "#545454", fontSize: 10, marginTop: 4 }}>
            Help
          </Text>
        </View>
        <View
          style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
        >
          <Image style={{ width: 26, height: 26 }} source={iconInbox} />

          <Text style={{ color: "#545454", fontSize: 10, marginTop: 4 }}>
            Inbox
          </Text>
        </View>
        <View
          style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
        >
          <Image style={{ width: 26, height: 26 }} source={iconAccount} />

          <Text style={{ color: "#545454", fontSize: 10, marginTop: 4 }}>
            Account
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
