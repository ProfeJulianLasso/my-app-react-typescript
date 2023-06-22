import LoginTemplate, {
  LoginTemplateProps,
} from "../../../Components/Templates/login";

const LoginPage = () => {
  const security: LoginTemplateProps = {
    login: {
      form: {
        button: {
          onClick: () => {
            const data = "hola mundo";
            console.log(data);
          },
          text: "Login",
          type: "button",
        },
        user: {
          input: {
            type: "text",
            name: "user",
            id: "user",
          },
          label: {
            text: "User",
            htmlFor: "user",
          },
        },
        password: {
          input: {
            type: "password",
            name: "password",
            id: "password",
          },
          label: {
            text: "Password",
            htmlFor: "password",
          },
        },
      },
      password: {
        recovery: {
          text: "Recovery",
          href: "/recovery",
        },
        reset: {
          text: "Reset",
          href: "/reset",
        },
      },
    },
  };
  return <LoginTemplate login={security.login} />;
};

export default LoginPage;
