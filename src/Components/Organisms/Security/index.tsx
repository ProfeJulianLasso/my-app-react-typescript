import LoginForm, { LoginFormProps } from "../../Molecules/LoginForm";

export type SecurityProps = {
  loginForm: LoginFormProps;
};

const Security = (props: SecurityProps) => {
  return (
    <div>
      <h1>Security</h1>
      <div>
        <LoginForm
          userLabel={props.loginForm.userLabel}
          userInput={props.loginForm.userInput}
          passLabel={props.loginForm.passLabel}
          passInput={props.loginForm.passInput}
          button={props.loginForm.button}
        />
      </div>
      <div>
        <a>Cambiar contraseña</a> - <a>Recuperar contraseña</a>
      </div>
    </div>
  );
};

export default Security;
