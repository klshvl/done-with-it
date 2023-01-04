import React from "react";
import { StyleProp, Text, TextProps, TextStyle } from "react-native";

import defaultStyles from "../../config/styles";

interface Props extends TextProps {}

const AppText = ({ children, style, ...otherProps }: Props) => {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};

export default AppText;
