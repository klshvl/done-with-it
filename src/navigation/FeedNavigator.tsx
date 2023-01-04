import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Listings, ListingsDetails } from "../screens";
import { Listing } from "../screens/ListingsScreen/Listings";

export type ListingsStackParamList = {
  Listings: undefined;
  ListingDetails: Listing;
};

const Stack = createNativeStackNavigator<ListingsStackParamList>();

const FeedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Listings" component={Listings} />
      <Stack.Screen name="ListingDetails" component={ListingsDetails} />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
