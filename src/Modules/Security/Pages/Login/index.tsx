import { ReactElement } from "react";
import LoginTemplate, {
  LoginTemplateProps,
} from "../../../../Components/Templates/login";
import useLoginFormButtonHook from "./hooks/LoginForm/Button";
import useLoginFormPasswordHook from "./hooks/LoginForm/Password";
import useRecoveryAndResetPassword from "./hooks/LoginForm/RecoveryAndResetPassword";
import useLoginFormUserHook from "./hooks/LoginForm/User";

const LoginPage = (): ReactElement => {
  const idForm = "frmLogin";

  const { userInput, user, setUser } = useLoginFormUserHook();
  const { passwordInput, password, setPassword } = useLoginFormPasswordHook();
  const button = useLoginFormButtonHook(
    [user, setUser],
    [password, setPassword],
    idForm
  );
  const { recovery, reset } = useRecoveryAndResetPassword();

  const security: LoginTemplateProps = {
    login: {
      form: { user: userInput, password: passwordInput, button, idForm },
      password: { recovery, reset },
    },
  };
  return <LoginTemplate login={security.login} />;
};

export default LoginPage;
