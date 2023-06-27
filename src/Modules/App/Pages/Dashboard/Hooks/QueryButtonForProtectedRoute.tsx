import { ButtonAtomProps } from "../../../../../Components/Atoms/Button";

type UseQueryButtonForProtectedRoute = {
  queryButtonAtomsProps: ButtonAtomProps;
};

const useQueryButtonForProtectedRoute = (
  token: string
): UseQueryButtonForProtectedRoute => {
  return {
    queryButtonAtomsProps: {
      className: "btn btn-primary",
      text: "Consultar el backend",
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
