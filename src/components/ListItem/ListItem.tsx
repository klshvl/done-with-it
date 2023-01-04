import "react-native-gesture-handler";
import {
  Image,
  ImageSourcePropType,
  TouchableHighlight,
  View,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import AppText from "../AppText";

import { styles } from "./styles";
import { ReactNode } from "react";

interface Props {
  IconComponent?: JSX.Element;
  image?: ImageSourcePropType;
  title: string;
  subTitle?: string;
  onPress?: () => void;
  renderRightActions?:
    | ((
        progressAnimatedValue: any,
        dragAnimatedValue: any,
        swipeable: Swipeable
      ) => ReactNode)
    | undefined;
}

const ListItem = ({
  image,
  title,
  subTitle,
  onPress,
  renderRightActions,
  IconComponent,
}: Props) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons
            color={colors.medium}
            name="chevron-right"
            size={25}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;
