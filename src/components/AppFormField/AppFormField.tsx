import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "../ErrorMessage";
import { AppTextInputProps } from "../AppTextInput/AppTextInput";
import { Inputs } from "../../../types";

interface Props extends AppTextInputProps {
  name: keyof Inputs;
}

const AppFormField = ({ name, ...otherProps }: Props) => {
  const { handleChange, setFieldTouched, errors, touched } =
    useFormikContext<Inputs>();

  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
