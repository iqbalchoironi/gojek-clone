import React from "react";
import { View, Text, Image } from "react-native";

const NavBarIcon = props => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Image style={{ width: 26, height: 26 }} source={props.img} />
      <Text
        style={{
          color: props.active ? "green" : "#545454",
          fontSize: 10,
          marginTop: 4
        }}
      >
        {props.title}
      </Text>
    </View>
  );
};

export default NavBarIcon;
