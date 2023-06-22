import SecurityOrganism, {
  SecurityOrganismProps,
} from "../../Organisms/Security";

export type LoginTemplateProps = {
  login: SecurityOrganismProps;
};

const LoginTemplate = ({ login }: LoginTemplateProps) => {
  return <SecurityOrganism form={login.form} password={login.password} />;
};

export default LoginTemplate;
