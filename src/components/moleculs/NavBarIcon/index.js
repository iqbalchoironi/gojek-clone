import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const NavBarIcon = props => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <TouchableOpacity onPress={props.onPress}>
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
      </TouchableOpacity>
    </View>
  );
};

export default NavBarIcon;
