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
            text: "Login",
            href: "/login",
          },
          {
            text: "Recovery",
            href: "/recovery",
          },
          {
            text: "Reset",
            href: "/reset",
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
