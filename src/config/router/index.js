import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { Home, NewsDetail, Orders, OrderDetail } from "../../containers/pages";

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    NewsDetail: {
      screen: NewsDetail
    }
  },
  {
    headerMode: "none",
    initialRouteName: "Home"
  }
);

const OrdersStack = createStackNavigator(
  {
    Orders: {
      screen: Orders
    },
    OrderDetail: {
      screen: OrderDetail
    }
  },
  {
    headerMode: "none",
    initialRouteName: "Orders"
  }
);

const Router = createSwitchNavigator(
  {
    HomeStack,
    OrdersStack
  },
  {
    headerMode: "none",
    initialRouteName: "HomeStack"
  }
);

export default createAppContainer(Router);
