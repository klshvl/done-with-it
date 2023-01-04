import { ImageBackground, View, Image, Text } from "react-native";
import AppButton from "../../components/AppButton";

import { styles } from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../navigation/AuthNavigator";

interface Props {
  navigation: NativeStackNavigationProp<StackParamList, "Welcome">;
}

const WelcomeScreen = ({ navigation }: Props) => {
  return (
    <ImageBackground
      blurRadius={8}
      style={styles.background}
      source={require("../../../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../../assets/logo-red.png")}
        />
        <Text style={styles.tagline}>Sell What You Do Not Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;
