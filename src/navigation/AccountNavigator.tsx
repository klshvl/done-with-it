import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Account, Messages } from "../screens";
import { MenuItem } from "../screens/AccountScreen/Account";

export type AccountStackParamList = {
  Account: undefined;
  Messages: undefined;
};

const Stack = createNativeStackNavigator<AccountStackParamList>();

const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Messages" component={Messages} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
