import { Image, View, ImageSourcePropType } from "react-native";

import AppText from "../../components/AppText";
import ListItem from "../../components/ListItem";
import { styles } from "./styles";
import { RouteProp } from "@react-navigation/native";
import { ListingsStackParamList } from "../../navigation/FeedNavigator";

interface Props {
  route: RouteProp<ListingsStackParamList, "ListingDetails">;
}

const ListingDetailsScreen = ({ route }: Props) => {
  const listing = route.params;

  return (
    <View>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../../../assets/mosh.jpg")}
            title="Mosh Hamedani"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
};

export default ListingDetailsScreen;
