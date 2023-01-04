import AppText from "../AppText";
import { styles } from "./styles";

interface Props {
  error: string | undefined;
  visible: boolean | undefined;
}

const ErrorMessage = ({ error, visible }: Props) => {
  if (!visible || !error) return null;

  return <AppText style={styles.error}>{error}</AppText>;
};

export default ErrorMessage;
