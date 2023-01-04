import { useFormikContext } from "formik";
import { Category, Inputs } from "../../../types";

import AppPicker from "../AppPicker";
import ErrorMessage from "../ErrorMessage";

interface Props {
  items: Category[];
  placeholder: string;
  name: "category";
  PickerItemComponent?: React.ElementType;
  numberOfColumns: number;
}

const AppFormPicker = ({
  items,
  name,
  placeholder,
  PickerItemComponent,
  numberOfColumns,
}: Props) => {
  const { errors, setFieldValue, touched, values } = useFormikContext<Inputs>();

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        PickerItemComponent={PickerItemComponent}
        numberOfColumns={numberOfColumns}
      ></AppPicker>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
