import { TouchableOpacity, View } from "react-native";
import { Category } from "../../../types";
import AppText from "../AppText";
import Icon from "../Icon";
import { styles } from "./styles";

interface Props {
  item: Category;
  onPress?: () => void;
}

const CategoryPickerItem = ({ item, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon name={item.icon} backgroundColor={item.backgroundColor} size={80} />
      <AppText style={styles.label}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

export default CategoryPickerItem;
