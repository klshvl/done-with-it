import AppButton from "../AppButton";
import { useFormikContext } from "formik";
import { AppButtonProps } from "../AppButton/AppButton";

const SubmitButton = ({ title }: AppButtonProps) => {
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} onPress={handleSubmit} />;
};

export default SubmitButton;
