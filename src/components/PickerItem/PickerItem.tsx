import { TouchableOpacity } from "react-native";

import { styles } from "./styles";
import AppText from "../AppText";
import { Category } from "../../../types";

interface Props {
  onPress: () => void;
  item: Category;
}

const PickerItem = ({ item, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

export default PickerItem;
