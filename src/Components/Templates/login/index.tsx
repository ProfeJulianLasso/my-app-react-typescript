import { ReactElement } from "react";
import SecurityOrganism, {
  SecurityOrganismProps,
} from "../../Organisms/Security";
import "./styles.css";

export type LoginTemplateProps = {
  login: SecurityOrganismProps;
};

const LoginTemplate = ({ login }: LoginTemplateProps): ReactElement => {
  return (
    <div className="login-form-container">
      <SecurityOrganism form={login.form} password={login.password} />
    </div>
  );
};

export default LoginTemplate;
