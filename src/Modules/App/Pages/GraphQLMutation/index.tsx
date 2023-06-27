import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import LoginFormMolecule, {
  LoginFormMoleculeProps,
} from "../../../../Components/Molecules/LoginForm";

const NEW_USER_MUTATION = gql`
  mutation Mutation($user: UserDto!) {
    newUser: createUser(user: $user) {
      userId
    }
  }
`;

type NewUser = {
  newUser: {
    userId: string;
  };
};

const GraphQLMutationPage = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const [newUser, { data, loading, error }] =
    useMutation<NewUser>(NEW_USER_MUTATION);

  const form = {
    idForm: "login-form",
    user: {
      label: {
        text: "User",
        htmlFor: "user",
      },
      input: {
        id: "user",
        name: "user",
        type: "text",
        className: "form-control",
        placeholder: "Enter your user",
        onChange: (event) => {
          setFirstName(event.target.value);
        },
      },
    },
    password: {
      label: {
        text: "Password",
        htmlFor: "password",
      },
      input: {
        id: "password",
        name: "password",
        type: "text",
        className: "form-control",
        placeholder: "Enter your password",
        onChange: (event) => {
          setLastName(event.target.value);
        },
      },
    },
    button: {
      text: "Register",
      className: "btn btn-primary",
      onClick: () => {
        console.log("user", firstName);
        console.log("Password", lastName);
        newUser({
          variables: {
            user: {
              firstName: firstName,
              lastName: lastName,
              roleId: "5c844594-775a-4db9-97ae-bb64f7bbf238",
            },
          },
        });
      },
    },
  } as LoginFormMoleculeProps;

  return (
    <>
      <h1>GraphQLMutationPage</h1>
      <br />
      <LoginFormMolecule
        idForm={form.idForm}
        user={form.user}
        password={form.password}
        button={form.button}
      />
      <p>
        {loading && <p>Loading...</p>}
        {error && <p>Error :( Please try again</p>}
        {data && (
          <p>
            Success <p>{data.newUser.userId}</p>
          </p>
        )}
      </p>
    </>
  );
};

export default GraphQLMutationPage;
