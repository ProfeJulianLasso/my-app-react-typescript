import ButtonAtom from "../../../../Components/Atoms/Button";
import useToken from "../../../Security/Hooks/Token";
import useGraphQLQueryButton from "./Hooks/GraphQLQueryButton";
import useQueryButtonForProtectedRoute from "./Hooks/QueryButtonForProtectedRoute";

const DashboardPage = () => {
  const initToken = useToken();
  const { queryButtonAtomsProps, token } = useQueryButtonForProtectedRoute(
    initToken ?? ""
  );

  const { graphQLQueryButtonAtomsProps } = useGraphQLQueryButton(
    initToken ?? ""
  );

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{token}</p>
      <br />
      <ButtonAtom
        text={queryButtonAtomsProps.text}
        className={queryButtonAtomsProps.className}
        onClick={queryButtonAtomsProps.onClick}
      />
      <br />
      <br />
      <ButtonAtom
        text={graphQLQueryButtonAtomsProps.text}
        className={graphQLQueryButtonAtomsProps.className}
        onClick={graphQLQueryButtonAtomsProps.onClick}
      />
    </div>
  );
};

export default DashboardPage;
