import { useAuth0 } from "@auth0/auth0-react";
import { ReactElement, useEffect } from "react";

const LogoutPage = (): ReactElement | null => {
  const { logout, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    logout({
      logoutParams: {
        returnTo: window.location.origin + "/login",
      },
    });
  });

  if (!isAuthenticated && isLoading) {
    return <div>Loading ...</div>;
  } else if (isAuthenticated && !isLoading) {
    return <div>Redirecting to login ...</div>;
  }
  return null;
};

export default LogoutPage;
