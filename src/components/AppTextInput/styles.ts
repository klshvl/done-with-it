import { StyleSheet, Platform } from "react-native";

import colors from "../../config/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    width: "100%",
    flexDirection: "row",
    padding: 15,
    borderRadius: 25,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});
