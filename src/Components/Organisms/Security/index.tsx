import { ReactElement } from "react";
import LoginFormMolecule, {
  LoginFormMoleculeProps,
} from "../../Molecules/LoginForm";
import PasswordRecoveryAndResetMolecule, {
  PasswordRecoveryAndResetMoleculeProps,
} from "../../Molecules/PasswordRecoveryAndReset";
import "./styles.css";

export type SecurityOrganismProps = {
  form: LoginFormMoleculeProps;
  password: PasswordRecoveryAndResetMoleculeProps;
};

const SecurityOrganism = ({
  form,
  password,
}: SecurityOrganismProps): ReactElement => {
  return (
    <>
      <div className="login-form">
        <LoginFormMolecule
          user={form.user}
          password={form.password}
          button={form.button}
          idForm={form.idForm}
        />
      </div>
      <div>
        <PasswordRecoveryAndResetMolecule
          recovery={password.recovery}
          reset={password.reset}
        />
      </div>
    </>
  );
};

export default SecurityOrganism;
