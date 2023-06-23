import { ReactElement, useState } from "react";
import LoginTemplate, {
  LoginTemplateProps,
} from "../../../../Components/Templates/login";
import useLoginFormButtonHook from "./hooks/LoginForm/Button";
import useLoginFormPasswordHook from "./hooks/LoginForm/Password";
import useRecoveryAndResetPassword from "./hooks/LoginForm/RecoveryAndResetPassword";
import useLoginFormUserHook from "./hooks/LoginForm/User";

const LoginPage = (): ReactElement => {
  const idForm = "frmLogin";
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const button = useLoginFormButtonHook(
    [user, setUser],
    [password, setPassword],
    idForm
  );
  const userInput = useLoginFormUserHook(setUser);
  const passwordInput = useLoginFormPasswordHook(setPassword);
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
