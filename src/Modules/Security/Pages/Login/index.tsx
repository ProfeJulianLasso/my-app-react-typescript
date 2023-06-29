import { useAuth0 } from "@auth0/auth0-react";
import { ReactElement } from "react";
import LoginTemplate, {
  LoginTemplateProps,
} from "../../../../Components/Templates/Login";
import useLoginFormButtonHook from "./Hooks/LoginForm/Button";
import useLoginFormPasswordHook from "./Hooks/LoginForm/Password";
import useRecoveryAndResetPasswordHook from "./Hooks/LoginForm/RecoveryAndResetPassword";
import useLoginFormUserHook from "./Hooks/LoginForm/User";

const LoginPage = (): ReactElement | null => {
  const { isAuthenticated, isLoading } = useAuth0();
  const idForm = "frmLogin";

  const { userInput, setUser } = useLoginFormUserHook();
  const { passwordInput, setPassword } = useLoginFormPasswordHook();
  const button = useLoginFormButtonHook(setUser, setPassword, idForm);
  const { recovery, reset } = useRecoveryAndResetPasswordHook();

  const security: LoginTemplateProps = {
    login: {
      form: { user: userInput, password: passwordInput, button, idForm },
      password: { recovery, reset },
    },
  };

  if (!isAuthenticated && isLoading) {
    return <div>Loading ...</div>;
  } else if (isAuthenticated && !isLoading) {
    window.location.href = "/dashboard";
    return <div>Redirecting to dashboard...</div>;
  } else if (!isAuthenticated && !isLoading)
    return (
      <div className="row">
        <div className="d-flex justify-content-center">
          <LoginTemplate login={security.login} />
        </div>
      </div>
    );
  return null;
};

export default LoginPage;
