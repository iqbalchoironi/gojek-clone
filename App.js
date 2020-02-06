import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  TouchableOpacity
} from "react-native";

import iconHome from "./icon/home-active.png";
import iconOrder from "./icon/order.png";
import iconHelp from "./icon/help.png";
import iconInbox from "./icon/inbox.png";
import iconAccount from "./icon/account.png";

import iconSearch from "./icon/search.png";
import iconPromo from "./icon/promo.png";

import gopayImage from "./icon/gopay.png";

import iconTopup from "./icon/topup.png";
import iconPay from "./icon/pay.png";
import iconMore from "./icon/more.png";
import iconNearby from "./icon/nearby.png";

import iconGoride from "./icon/go-ride.png";
import iconGocar from "./icon/go-car.png";
import iconGobluebird from "./icon/go-bluebird.png";
import iconGosend from "./icon/go-send.png";
import iconGodeals from "./icon/go-deals.png";
import iconGopulsa from "./icon/go-pulsa.png";
import iconGofood from "./icon/go-food.png";
import iconGomore from "./icon/go-more.png";

import imageSepakBola from "./dummy/sepak-bola.jpg";
import logoWhite from "./logo/white.png";

import bannerImage from "./dummy/food-banner.jpg";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === "ios" ? 20 : StatusBar.currentHeight + 15
      }}
    >
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: "white" }}>
          {/* search bar */}
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
          {/* gopay section */}
          <View style={{ marginHorizontal: 17, marginTop: 8 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
                padding: 14,
                backgroundColor: "blue",
                backgroundColor: "#2C5FB8"
              }}
            >
              <Image source={gopayImage} />
              <Text
                style={{ fontSize: 17, color: "white", fontWeight: "bold" }}
              >
                Rp. 50.000
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingTop: 20,
                paddingBottom: 14,
                backgroundColor: "#2F65BD",
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4
              }}
            >
              <View style={{ flex: 1, alignItems: "center" }}>
                <Image source={iconPay} />
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "white",
                    fontSize: 13,
                    marginTop: 15
                  }}
                >
                  Pay
                </Text>
              </View>
              <View style={{ flex: 1, alignItems: "center" }}>
                <Image source={iconNearby} />
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "white",
                    fontSize: 13,
                    marginTop: 15
                  }}
                >
                  Nearby
                </Text>
              </View>
              <View style={{ flex: 1, alignItems: "center" }}>
                <Image source={iconTopup} />
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "white",
                    fontSize: 13,
                    marginTop: 15
                  }}
                >
                  Top up
                </Text>
              </View>
              <View style={{ flex: 1, alignItems: "center" }}>
                <Image source={iconMore} />
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "white",
                    fontSize: 13,
                    marginTop: 15
                  }}
                >
                  More
                </Text>
              </View>
            </View>
            <View />
          </View>
          {/* main feature */}
          <View style={{ marginTop: 18, flexWrap: "wrap" }}>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                width: "100%",
                marginBottom: 18
              }}
            >
              <View style={{ width: "25%", alignItems: "center" }}>
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
                  <Image source={iconGoride} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: "bold",
                    textAlign: "center"
                  }}
                >
                  GO-RIDE
                </Text>
              </View>

              <View style={{ width: "25%", alignItems: "center" }}>
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
                  <Image source={iconGocar} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: "bold",
                    textAlign: "center"
                  }}
                >
                  GO-CAR
                </Text>
              </View>
              <View style={{ width: "25%", alignItems: "center" }}>
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
                  <Image source={iconGobluebird} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: "bold",
                    textAlign: "center"
                  }}
                >
                  GO-BLUEBIRD
                </Text>
              </View>
              <View style={{ width: "25%", alignItems: "center" }}>
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
                  <Image source={iconGosend} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: "bold",
                    textAlign: "center"
                  }}
                >
                  GO-SENT
                </Text>
              </View>
            </View>

            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                width: "100%"
              }}
            >
              <View style={{ width: "25%", alignItems: "center" }}>
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
                  <Image source={iconGodeals} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: "bold",
                    textAlign: "center"
                  }}
                >
                  GO-DEAL
                </Text>
              </View>
              <View style={{ width: "25%", alignItems: "center" }}>
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
                  <Image source={iconGopulsa} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: "bold",
                    textAlign: "center"
                  }}
                >
                  GO-PULSA
                </Text>
              </View>
              <View style={{ width: "25%", alignItems: "center" }}>
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
                  <Image source={iconGofood} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: "bold",
                    textAlign: "center"
                  }}
                >
                  GO-FOOD
                </Text>
              </View>
              <View style={{ width: "25%", alignItems: "center" }}>
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
                  <Image source={iconGomore} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: "bold",
                    textAlign: "center"
                  }}
                >
                  MORE
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{ height: 17, backgroundColor: "#F2F2F4", marginTop: 20 }}
          ></View>
          {/* news section */}
          <View style={{ paddingTop: 16, paddingHorizontal: 16 }}>
            <View style={{ position: "relative" }}>
              <Image
                source={imageSepakBola}
                style={{ height: 170, width: "100%", borderRadius: 6 }}
              ></Image>
              <View
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  backgroundColor: "black",
                  opacity: 0.2,
                  borderRadius: 6
                }}
              ></View>
              <View
                style={{
                  height: 15,
                  width: 55,
                  position: "absolute",
                  top: 16,
                  left: 16
                }}
              >
                <Image
                  source={logoWhite}
                  style={{
                    width: undefined,
                    height: undefined,
                    resizeMode: "contain",
                    flex: 1
                  }}
                ></Image>
              </View>
            </View>
            <View
              style={{
                paddingTop: 16,
                paddingBottom: 20,
                borderBottomColor: "#E8E9ED",
                borderBottomWidth: 1
              }}
            >
              <Text
                style={{ fontSize: 16, fontWeight: "bold", color: "#1C1C1C" }}
              >
                GO-NEWS
              </Text>
              <Text
                style={{ fontSize: 14, color: "#7A7A7A", marginBottom: 11 }}
              >
                Dimas drajat selamatkan penalti, Timnas U-23 kalahkan Malaysia
                dalam laga persahabatan.
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "#61A756",
                  paddingHorizontal: 12,
                  paddingVertical: 11,
                  alignSelf: "flex-end",
                  borderRadius: 4
                }}
              >
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: "bold",
                    color: "white",
                    textAlign: "center"
                  }}
                >
                  READ
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* go food banner */}
          <View style={{ padding: 16 }}>
            <View
              style={{
                position: "relative"
              }}
            >
              <Image
                source={bannerImage}
                style={{ height: 170, width: "100%", borderRadius: 6 }}
              ></Image>
              <View
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  backgroundColor: "black",
                  opacity: 0.15,
                  borderRadius: 6
                }}
              ></View>
              <View
                style={{
                  height: 15,
                  width: 55,
                  position: "absolute",
                  top: 16,
                  left: 16
                }}
              >
                <Image
                  source={logoWhite}
                  style={{
                    width: undefined,
                    height: undefined,
                    resizeMode: "contain",
                    flex: 1
                  }}
                ></Image>
              </View>
              <View
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 16,
                  paddingBottom: 16
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      color: "white",
                      marginBottom: 8
                    }}
                  >
                    Free GO-FOOD voucher
                  </Text>
                  <Text
                    style={{ fontSize: 12, fontWeight: "500", color: "white" }}
                  >
                    Quick, before they run out !
                  </Text>
                </View>
                <View style={{ flex: 1, paddingLeft: 12 }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#61A756",
                      paddingHorizontal: 12,
                      paddingVertical: 11,
                      alignSelf: "stretch",
                      borderRadius: 4
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 10,
                        fontWeight: "bold",
                        color: "white",
                        textAlign: "center"
                      }}
                    >
                      GET VOUCER
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View
              style={{
                borderBottomColor: "#E8E9ED",
                borderBottomWidth: 1,
                marginTop: 16,
                marginBottom: 20
              }}
            ></View>
          </View>
        </View>
      </ScrollView>
      {/* navigation menu */}
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
