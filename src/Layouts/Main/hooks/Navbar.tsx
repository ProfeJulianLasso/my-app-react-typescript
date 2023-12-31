import { useLocation } from "react-router-dom";
import { NavbarTemplateProps } from "../../../Components/Templates/Navbar";

const useNavbarHook = (): NavbarTemplateProps => {
  const { pathname } = useLocation();
  return {
    navbar: {
      navbar: {
        title: "MyApp",
        active: pathname,
        links: [
          {
            text: "Dashboard",
            href: "/dashboard",
          },
          {
            text: "Products",
            href: "/products",
          },
          {
            text: "GraphQL - Query Lazy Load",
            href: "/graphql-query-lazy",
          },
          {
            text: "GraphQL - Mutation",
            href: "/graphql-mutation",
          },
          {
            text: "Logout",
            href: "/logout",
          },
        ],
      },
    },
  };
};

export default useNavbarHook;
