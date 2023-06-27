import ButtonAtom from "../../../../Components/Atoms/Button";
import useGraphQLQueryButton from "./Hooks/GraphQLQueryButton";

const DashboardPage = () => {
  const { graphQLQueryButtonAtomsProps, resultGraphQLQueryButton } =
    useGraphQLQueryButton();

  return (
    <div>
      <h1>Dashboard</h1>
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
