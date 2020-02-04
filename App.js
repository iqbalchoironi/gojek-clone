import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Platform,
  StatusBar
} from "react-native";

import iconHome from "./icon/home-active.png";
import iconOrder from "./icon/order.png";
import iconHelp from "./icon/help.png";
import iconInbox from "./icon/inbox.png";
import iconAccount from "./icon/account.png";

import iconSearch from "./icon/search.png";
import iconPromo from "./icon/promo.png";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === "ios" ? 20 : StatusBar.currentHeight + 15
      }}
    >
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ marginHorizontal: 17, flexDirection: "row" }}>
          <View style={{ position: "relative", flex: 1 }}>
            <TextInput
              placeholder="what do you want to eat ?"
              style={{
                borderWidth: 1,
                borderColor: "#E8E8E8",
                borderRadius: 25,
                height: 40,
                fontSize: 13,
                paddingLeft: 45,
                paddingRight: 20,
                backgroundColor: "white",
                marginRight: 18
              }}
            />
            <Image
              source={iconSearch}
              style={{ position: "absolute", top: 5, left: 12 }}
            />
          </View>
          <View
            style={{
              width: 35,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Image source={iconPromo} />
          </View>
        </View>
      </View>
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
