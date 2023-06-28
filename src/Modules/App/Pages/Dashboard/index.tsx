import ButtonAtom from "../../../../Components/Atoms/Button";
import useGraphQLQueryButton from "./Hooks/GraphQLQueryButton";
import useQueryButtonForProtectedRoute from "./Hooks/QueryButtonForProtectedRoute";

const DashboardPage = () => {
  const { graphQLQueryButtonAtomsProps, resultGraphQLQueryButton } =
    useGraphQLQueryButton();

  const { queryButtonAtomsProps } = useQueryButtonForProtectedRoute();

  return (
    <div>
      <h1>Dashboard</h1>
      <ButtonAtom
        text={queryButtonAtomsProps.text}
        className={queryButtonAtomsProps.className}
        onClick={queryButtonAtomsProps.onClick}
      />
      <br />
      <br />
      <h1>GraphQL Query</h1>
      <ButtonAtom
        text={graphQLQueryButtonAtomsProps.text}
        className={graphQLQueryButtonAtomsProps.className}
        onClick={graphQLQueryButtonAtomsProps.onClick}
      />
      <br />
      <br />
      {resultGraphQLQueryButton}
    </div>
  );
};

export default DashboardPage;
