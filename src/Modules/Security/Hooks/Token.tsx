import { useAuth0 } from "@auth0/auth0-react";
import { Dispatch, SetStateAction, useState } from "react";

const getToken = (
  getAccessTokenSilently: any,
  setToken: Dispatch<SetStateAction<string | null>>
): void => {
  const getTokenAuth0 = async (): Promise<void> => {
    try {
      const token = await getAccessTokenSilently();
      setToken(token);
    } catch (error) {
      setToken(null);
    }
  };
  getTokenAuth0();
};

const useToken = () => {
  const [token, setToken] = useState<string | null>(null);
  const { getAccessTokenSilently } = useAuth0();
  getToken(getAccessTokenSilently, setToken);
  return token;
};

export default useToken;
