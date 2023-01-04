import { FlatList, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Icon from "../../components/Icon";
import ListItem from "../../components/ListItem";
import colors from "../../config/colors";
import { styles } from "./styles";
import ListItemSeparator from "../../components/ListItemSeparator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AccountStackParamList } from "../../navigation/AccountNavigator";

export interface MenuItem {
  title: string;
  icon: {
    name: keyof typeof MaterialCommunityIcons.glyphMap;
    backgroundColor: string;
  };
  targetScreen?: string | undefined;
}

interface Props {
  navigation: NativeStackNavigationProp<AccountStackParamList, "Account">;
}

const menuItems: MenuItem[] = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];

const AccountScreen = ({ navigation }: Props) => {
  const listHandler = ({ item }: { item: MenuItem }) => {
    return (
      <ListItem
        title={item.title}
        IconComponent={
          <Icon
            name={item.icon.name}
            backgroundColor={item.icon.backgroundColor}
          />
        }
        onPress={() => navigation.navigate(item.targetScreen)}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Test"
          subTitle="test@test.com"
          image={require("../../../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={listHandler}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </View>
  );
};

export default AccountScreen;
