import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

const useToken = () => {
  const [token, setToken] = useState<string | null>(null);
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const getToken = async () => {
      const token = await getAccessTokenSilently();
      setToken(token);
    };
    getToken();
  }, [getAccessTokenSilently]);

  return token;
};

export default useToken;
