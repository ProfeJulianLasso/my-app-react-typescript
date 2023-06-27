import { gql, useQuery } from "@apollo/client";
import { ReactElement, useState } from "react";
import { ButtonAtomProps } from "../../../../../Components/Atoms/Button";

type UseGraphQLQueryButton = {
  graphQLQueryButtonAtomsProps: ButtonAtomProps;
  resultGraphQLQueryButton: ReactElement;
};

export const GET_USERS_QUERY = gql`
  query GetAllUsers {
    users: getAllUsers {
      userId
      firstName
      lastName
    }
  }
`;

export type User = {
  userId: string;
  firstName: string;
  lastName: string;
};

export type UsersData = {
  users: User[];
};

const useGraphQLQueryButton = (): UseGraphQLQueryButton => {
  const { data, loading, error } = useQuery<UsersData>(GET_USERS_QUERY);
  const [result, setResult] = useState<ReactElement>(<></>);

  return {
    graphQLQueryButtonAtomsProps: {
      className: "btn btn-primary",
      text: "GraphQL Query - Get All Users",
      onClick: () => {
        if (loading) setResult(<p>Loading...</p>);
        if (error)
          setResult(
            <>
              <p>Error :(</p>
              <p>{error.message}</p>
            </>
          );
        if (data && !loading && !error)
          setResult(
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
          );
      },
    } as ButtonAtomProps,
    resultGraphQLQueryButton: result,
  };
};

export default useGraphQLQueryButton;
