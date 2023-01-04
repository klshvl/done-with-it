import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./src/navigation/AuthNavigator";
import navigationTheme from "./src/navigation/navigationTheme";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  return (
    // <SafeAreaView style={{ flex: 1 }}>
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
    // </SafeAreaView>
  );
}
