import {
  View,
  TextInputProps,
  TouchableWithoutFeedback,
  Modal,
  Button,
  SafeAreaView,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../AppText";
import { styles } from "./styles";
import colors from "../../config/colors";
import { useState } from "react";
import PickerItem from "../PickerItem";
import { Category } from "../../../types";

interface Props extends TextInputProps {
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;
  // placeholder?: string;
  otherProps?: TextInputProps;
  items: Category[];
  selectedItem?: Category;
  onSelectItem: (item: Category) => void;
  PickerItemComponent?: React.ElementType;
  numberOfColumns?: number;
}

const AppPicker = ({
  icon,
  placeholder,
  items,
  selectedItem,
  onSelectItem,
  PickerItemComponent = PickerItem,
  numberOfColumns,
}: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const modalHandler = () => {
    setModalVisible(!modalVisible);
  };

  const categoriesHandler = ({ item }: { item: Category }) => {
    return (
      <PickerItemComponent
        item={item}
        onPress={() => {
          setModalVisible(!modalVisible);
          onSelectItem(item);
        }}
      />
    );
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={modalHandler}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <SafeAreaView>
          <Button title="Close" onPress={modalHandler} />
          <FlatList
            numColumns={numberOfColumns}
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={categoriesHandler}
          />
        </SafeAreaView>
      </Modal>
    </>
  );
};

export default AppPicker;
