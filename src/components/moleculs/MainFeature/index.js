import React from "react";
import { View, Text, Image } from "react-native";

const MainFeature = props => {
  return (
    <View style={{ width: "25%", alignItems: "center", marginBottom: 10 }}>
      <View
        style={{
          width: 58,
          height: 58,
          borderWidth: 1,
          borderColor: "#EFEFEF",
          borderRadius: 18,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 6
        }}
      >
        <Image source={props.img} />
      </View>
      <Text
        style={{
          fontSize: 11,
          fontWeight: "bold",
          textAlign: "center"
        }}
      >
        {props.title}
      </Text>
    </View>
  );
};

export default MainFeature;
