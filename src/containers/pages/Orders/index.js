import React from "react";
import NavBar from "../../organisms/NavBar";
import { View, Text, Button } from "react-native";

const Orders = props => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text>Orders Page</Text>
        <Button
          title="DETAIL"
          onPress={() => props.navigation.navigate("OrderDetail")}
        />
      </View>
      <NavBar />
    </View>
  );
};

export default Orders;
