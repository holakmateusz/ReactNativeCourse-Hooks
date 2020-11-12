import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import CounterScreen from "./src/screens/CounterScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ImageScreen from "./src/screens/ImageScreen";
import ListScreen from "./src/screens/ListScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import TextScreen from "./src/screens/TextScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Text: TextScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerTitleAlign: "center",
      headerTintColor: "blue",
    },
  }
);

export default createAppContainer(navigator);
