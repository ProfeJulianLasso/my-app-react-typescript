import { LoginFormProps } from "../../../Components/Molecules/LoginForm";
import LoginTemplate from "../../../Components/Templates/login";

const LoginPage = () => {
  const loginForm = {
    button: {
      onClick: () => {
        try {
          const data = "hola mundo";
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      },
      text: "Login",
      type: "submit",
    },
    userLabel: {
      text: "Usuario",
    },
    userInput: {
      type: "text",
    },
    passLabel: {
      text: "Password",
    },
    passInput: {
      type: "password",
    },
  } as LoginFormProps;
  return <LoginTemplate loginForm={loginForm} />;
};

export default LoginPage;
