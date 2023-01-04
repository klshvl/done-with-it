import { useFormikContext } from "formik";
import { Inputs } from "../../../types";

import ErrorMessage from "../ErrorMessage";
import ImageInputList from "../ImageInputList";

interface Props {
  name: keyof Inputs;
}

const FormImagePicker = ({ name }: Props) => {
  const { errors, setFieldValue, touched, values } = useFormikContext<Inputs>();

  const imageUris = [...values[name]]; //the spread operator is unfortunately currently unsupported for asynchronous iterators

  const addHandler = (uri: string | undefined) => {
    if (!uri) return;
    setFieldValue(name, [...imageUris, uri]);
  };

  const removeHandler = (uri: string | undefined) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri: string | undefined) => imageUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={addHandler}
        onRemoveImage={removeHandler}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormImagePicker;
