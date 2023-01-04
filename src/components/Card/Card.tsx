import {
  Image,
  ImageSourcePropType,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import AppText from "../AppText";
import { styles } from "./styles";
import { ListingsImage } from "../../screens/ListingsScreen/Listings";

interface Props {
  title: string;
  subTitle: string;
  image: ImageSourcePropType | undefined;
  onPress: () => void;
}

const Card = ({ title, subTitle, image, onPress }: Props) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;
