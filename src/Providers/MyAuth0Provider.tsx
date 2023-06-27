import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { ReactElement } from "react";
import useToken from "../Modules/Security/Hooks/Token";

type MyApolloProviderProps = {
  children: ReactElement;
};

const MyApolloProvider = ({
  children,
}: MyApolloProviderProps): ReactElement => {
  const token = useToken();

  const link = new HttpLink({
    uri: "http://localhost:3000/graphql/",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default MyApolloProvider;
