import { ReactElement } from "react";
import NavbarMolecule, { NavbarMoleculeProps } from "../../Molecules/Navbar";

export type NavbarOrganismProps = {
  navbar: NavbarMoleculeProps;
};

const NavbarOrganism = ({ navbar }: NavbarOrganismProps): ReactElement => {
  return (
    <NavbarMolecule
      title={navbar.title}
      links={navbar.links}
      active={navbar.active}
    />
  );
};

export default NavbarOrganism;
