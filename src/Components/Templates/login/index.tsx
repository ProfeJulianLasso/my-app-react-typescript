import { LoginFormProps } from "../../Molecules/LoginForm";
import Security from "../../Organisms/Security";

export type LoginTemplateProps = {
  loginForm: LoginFormProps;
};

const LoginTemplate = (props: LoginTemplateProps) => {
  return <Security loginForm={props.loginForm} />;
};

export default LoginTemplate;
