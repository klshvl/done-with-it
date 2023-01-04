import { useState, useEffect } from "react";
import { Button, FlatList, ImageSourcePropType, View } from "react-native";

import { AppText, Card } from "../../components";
import { styles } from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ListingsStackParamList } from "../../navigation/FeedNavigator";
import listingsApi from "../../api/listings";

export interface ListingsImage {
  url: ImageSourcePropType;
  thumbnailUrl: ImageSourcePropType;
}

export interface Listing {
  id: number;
  title: string;
  price: number;
  images: ListingsImage[];
  categoryId: number;
  userId: number;
  location: { latitude: number; longitude: number };
}

interface Props {
  navigation: NativeStackNavigationProp<ListingsStackParamList, "Listings">;
}

const ListingsScreen = ({ navigation }: Props) => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [error, setError] = useState<boolean>(false);

  const loadListings = async () => {
    const response = await listingsApi.getListings();

    if (!response.ok) {
      return setError(true);
    }

    setError(false);

    const data = response.data as Listing[];

    setListings(data);
  };

  useEffect(() => {
    loadListings();
  }, []);

  const listingsHandler = ({ item }: { item: Listing }) => {
    return (
      <Card
        title={item.title}
        subTitle={"$" + item.price}
        image={item.images[0].url}
        onPress={() => navigation.navigate("ListingDetails", item)}
      />
    );
  };

  return (
    <View style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't load</AppText>
          <Button title="Retry" onPress={loadListings} />
        </>
      )}
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={listingsHandler}
      />
    </View>
  );
};

export default ListingsScreen;
