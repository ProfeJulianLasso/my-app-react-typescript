import { ButtonAtomProps } from "../../../../../Components/Atoms/Button";

type UseGraphQLQueryButton = {
  graphQLQueryButtonAtomsProps: ButtonAtomProps;
};

const useGraphQLQueryButton = (initToken: string): UseGraphQLQueryButton => {
  return {
    graphQLQueryButtonAtomsProps: {
      className: "btn btn-primary",
      text: "GraphQL Query",
      onClick: () => {},
    } as ButtonAtomProps,
  };
};

export default useGraphQLQueryButton;
