import { ReactElement } from "react";
import NavbarOrganism, { NavbarOrganismProps } from "../../Organisms/Navbar";

export type NavbarTemplateProps = {
  navbar: NavbarOrganismProps;
};

const NavbarTemplate = ({ navbar }: NavbarTemplateProps): ReactElement => {
  return <NavbarOrganism navbar={navbar.navbar} />;
};

export default NavbarTemplate;
