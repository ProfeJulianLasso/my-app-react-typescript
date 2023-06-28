import { useAuth0 } from "@auth0/auth0-react";
import { ReactElement } from "react";

const RecoveryPage = (): ReactElement | null => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (!isAuthenticated && isLoading) {
    return <div>Loading ...</div>;
  } else if (isAuthenticated && !isLoading) {
    window.location.href = "/dashboard";
    return <div>Redirecting to dashboard...</div>;
  } else if (!isAuthenticated && !isLoading) return <div>RecoveryPage</div>;
  return null;
};

export default RecoveryPage;
