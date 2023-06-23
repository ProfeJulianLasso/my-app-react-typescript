import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import NavbarTemplate from "../../Components/Templates/Navbar";
import useNavbarHook from "./hooks/Navbar";
import "./styles.css";

const MainLayout = (): ReactElement => {
  const { navbar } = useNavbarHook();
  return (
    <>
      <NavbarTemplate navbar={navbar} />
      <div className="container margin-top">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
