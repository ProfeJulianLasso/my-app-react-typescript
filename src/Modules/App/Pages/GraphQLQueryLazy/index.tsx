import { useLazyQuery } from "@apollo/client";
import ButtonAtom, {
  ButtonAtomProps,
} from "../../../../Components/Atoms/Button";
import {
  GET_USERS_QUERY,
  UsersData,
} from "../Dashboard/Hooks/GraphQLQueryButton";

const GraphQLQueryLazyPage = () => {
  const [getAllUsers, { data, loading, error }] =
    useLazyQuery<UsersData>(GET_USERS_QUERY);

  const button: ButtonAtomProps = {
    text: "GraphQL Query - Get All Users",
    className: "btn btn-primary",
    onClick: () => {
      getAllUsers();
    },
  };

  return (
    <>
      <ButtonAtom
        text={button.text}
        className={button.className}
        onClick={button.onClick}
      />
      <div>
        {loading && <p>Loading...</p>}
        {error && (
          <>
            <p>Error :(</p>
            <p>{error.message}</p>
          </>
        )}
        <br />
        {data && (
          <table className="table table-bordered border-primary table-striped">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">First name</th>
                <th scope="col">Last name</th>
              </tr>
            </thead>
            <tbody>
              {data.users.map((user) => (
                <tr key={user.userId}>
                  <td>{user.userId}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default GraphQLQueryLazyPage;
