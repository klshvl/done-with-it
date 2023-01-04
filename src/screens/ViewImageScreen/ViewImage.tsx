import { Image, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "./styles";

const ViewImageScreen = () => {
  return (
    <View style={styles.image}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name="delete" size={35} />
      </View>
      <Image
        style={styles.image}
        source={require("../../../assets/chair.jpg")}
        resizeMode="contain"
      />
    </View>
  );
};

export default ViewImageScreen;
