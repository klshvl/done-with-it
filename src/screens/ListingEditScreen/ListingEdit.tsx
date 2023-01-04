import { View } from "react-native";
import * as Yup from "yup";

import { Category } from "../../../types";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  CategoryPickerItem,
  FormImagePicker,
  SubmitButton,
} from "../../components";
import useLocation from "../../hooks/useLocation";

const validationSchema = Yup.object({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image"),
});

const categories: Category[] = [
  {
    label: "Furniture",
    value: 1,
    backgroundColor: "red",
    icon: "table-furniture",
  },
  {
    label: "Clothing",
    value: 2,
    backgroundColor: "green",
    icon: "tshirt-crew-outline",
  },
  { label: "Cameras", value: 3, backgroundColor: "blue", icon: "camera" },
];

const ListingEdit = () => {
  const location = useLocation();

  return (
    <View style={{ padding: 12 }}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={() => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
        />
        <AppFormPicker
          items={categories}
          numberOfColumns={3}
          name="category"
          placeholder="Category"
          PickerItemComponent={CategoryPickerItem}
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Decsription"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </View>
  );
};

export default ListingEdit;
