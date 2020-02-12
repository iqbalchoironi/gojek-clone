import React from "react";
import { View, Text, Image } from "react-native";

const GopayFeature = props => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image source={props.img} />
      <Text
        style={{
          fontWeight: "bold",
          color: "white",
          fontSize: 13,
          marginTop: 15
        }}
      >
        {props.text}
      </Text>
    </View>
  );
};

export default GopayFeature;
