import LoginForm, { LoginFormMoleculeProps } from "../../Molecules/LoginForm";
import PasswordRecoveryAndResetMolecule, {
  PasswordRecoveryAndResetMoleculeProps,
} from "../../Molecules/PasswordRecoveryAndReset";

export type SecurityOrganismProps = {
  form: LoginFormMoleculeProps;
  password: PasswordRecoveryAndResetMoleculeProps;
};

const SecurityOrganism = ({ form, password }: SecurityOrganismProps) => {
  return (
    <div>
      <h1>Security</h1>
      <div>
        <LoginForm
          user={form.user}
          password={form.password}
          button={form.button}
        />
      </div>
      <div>
        <PasswordRecoveryAndResetMolecule
          recovery={password.recovery}
          reset={password.reset}
        />
      </div>
    </div>
  );
};

export default SecurityOrganism;
