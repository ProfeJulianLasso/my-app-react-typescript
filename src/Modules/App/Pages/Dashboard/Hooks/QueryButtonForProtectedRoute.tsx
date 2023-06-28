import { ButtonAtomProps } from "../../../../../Components/Atoms/Button";
import useToken from "../../../../Security/Hooks/Token";

type UseQueryButtonForProtectedRoute = {
  queryButtonAtomsProps: ButtonAtomProps;
};

const useQueryButtonForProtectedRoute = (): UseQueryButtonForProtectedRoute => {
  const token = useToken();

  return {
    queryButtonAtomsProps: {
      className: "btn btn-primary",
      text: "Consultar el backend protegido",
      onClick: () => {
        fetch("http://localhost:3001/protected", {
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
  };
};

export default useQueryButtonForProtectedRoute;
