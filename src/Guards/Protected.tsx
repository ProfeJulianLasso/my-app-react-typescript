import { ReactElement } from "react";
import { Navigate } from "react-router-dom";

type ProtectedGuardProps = {
  isSignedIn: boolean;
  children: ReactElement;
};

function ProtectedGuard({
  isSignedIn,
  children,
}: ProtectedGuardProps): ReactElement {
  if (!isSignedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default ProtectedGuard;
