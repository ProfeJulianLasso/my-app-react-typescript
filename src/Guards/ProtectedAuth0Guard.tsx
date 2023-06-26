import { withAuthenticationRequired } from "@auth0/auth0-react";
import { ComponentType, ReactElement } from "react";

type ProtectedAuth0GuardProps = {
  component: ComponentType;
};

function ProtectedAuth0Guard({
  component,
  ...propsForComponent
}: ProtectedAuth0GuardProps): ReactElement {
  const Component = withAuthenticationRequired(component);
  return <Component {...propsForComponent} />;
}

export default ProtectedAuth0Guard;
