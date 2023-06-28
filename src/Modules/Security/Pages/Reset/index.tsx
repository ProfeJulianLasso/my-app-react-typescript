import { useAuth0 } from "@auth0/auth0-react";
import { ReactElement } from "react";

const ResetPage = (): ReactElement | null => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (!isAuthenticated && isLoading) {
    return <div>Loading ...</div>;
  } else if (isAuthenticated && !isLoading) {
    window.location.href = "/dashboard";
    return <div>Redirecting to dashboard...</div>;
  } else if (!isAuthenticated && !isLoading) return <div>ResetPage</div>;
  return null;
};

export default ResetPage;
