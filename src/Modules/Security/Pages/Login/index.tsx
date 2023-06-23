import { ReactElement } from "react";
import LoginTemplate, {
  LoginTemplateProps,
} from "../../../../Components/Templates/Login";
import useLoginFormButtonHook from "./hooks/LoginForm/Button";
import useLoginFormPasswordHook from "./hooks/LoginForm/Password";
import useRecoveryAndResetPasswordHook from "./hooks/LoginForm/RecoveryAndResetPassword";
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
  const { recovery, reset } = useRecoveryAndResetPasswordHook();

  const security: LoginTemplateProps = {
    login: {
      form: { user: userInput, password: passwordInput, button, idForm },
      password: { recovery, reset },
    },
  };

  return (
    <div className="row">
      <div className="d-flex justify-content-center">
        <LoginTemplate login={security.login} />
      </div>
    </div>
  );
};

export default LoginPage;
