import { Image, View } from "react-native";
import * as Yup from "yup";

import { AppFormField, SubmitButton, AppForm } from "../../components";
import { styles } from "./styles";

const validationSchema = Yup.object({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const Login = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/logo-red.png")}
        style={styles.logo}
      />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          textContentType="password"
          secureTextEntry={true}
        />
        <SubmitButton title="Login" />
      </AppForm>
    </View>
  );
};
export default Login;
