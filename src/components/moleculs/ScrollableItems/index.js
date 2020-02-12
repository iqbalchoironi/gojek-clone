import React from "react";
import { View, Text, Image } from "react-native";

const ScrollableItems = props => {
  return (
    <View style={{ marginRight: 16 }}>
      <View
        style={{
          height: 150,
          width: 150,
          borderRadius: 10,
          marginBottom: 12
        }}
      >
        <Image
          source={props.img}
          style={{
            width: undefined,
            height: undefined,
            resizeMode: "cover",
            flex: 1,
            borderRadius: 10
          }}
        ></Image>
      </View>
      <Text style={{ fontSize: 16, fontWeight: "bold", color: "#1C1C1C" }}>
        {props.title}
      </Text>
    </View>
  );
};

export default ScrollableItems;
