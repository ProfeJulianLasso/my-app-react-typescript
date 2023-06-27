import { Dispatch, SetStateAction, useState } from "react";
import { ButtonAtomProps } from "../../../../../Components/Atoms/Button";

type UseQueryButtonForProtectedRoute = {
  queryButtonAtomsProps: ButtonAtomProps;
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
};

const useQueryButtonForProtectedRoute = (
  initToken: string
): UseQueryButtonForProtectedRoute => {
  const [token, setToken] = useState<string>(initToken);

  return {
    queryButtonAtomsProps: {
      className: "btn btn-primary",
      text: "Consultar el backend",
      onClick: () => {
        fetch("http://localhost:3000/protected", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.error(error));
      },
    } as ButtonAtomProps,
    token,
    setToken,
  };
};

export default useQueryButtonForProtectedRoute;
