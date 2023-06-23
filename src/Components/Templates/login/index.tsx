import { ReactElement } from "react";
import SecurityOrganism, {
  SecurityOrganismProps,
} from "../../Organisms/Security";

export type LoginTemplateProps = {
  login: SecurityOrganismProps;
};

const LoginTemplate = ({ login }: LoginTemplateProps): ReactElement => {
  return <SecurityOrganism form={login.form} password={login.password} />;
};

export default LoginTemplate;
