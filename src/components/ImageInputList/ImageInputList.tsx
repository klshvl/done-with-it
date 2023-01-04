import { useRef } from "react";
import { ScrollView, View } from "react-native";
import ImageInput from "../ImageInput/ImageInput";

import { styles } from "./style";

interface Props {
  imageUris: string[];
  onRemoveImage: (a: string | undefined) => void;
  onAddImage: (a: string | undefined) => void;
}

const ImageInputList = ({
  imageUris = [],
  onRemoveImage,
  onAddImage,
}: Props) => {
  const scrollview = useRef<ScrollView>(null);

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={scrollview}
        onContentSizeChange={() => scrollview.current?.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View style={styles.image} key={uri}>
              <ImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ImageInputList;
