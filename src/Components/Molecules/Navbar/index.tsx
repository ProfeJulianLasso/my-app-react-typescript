import { ReactElement } from "react";
import LinkAtom, { LinkAtomProps } from "../../Atoms/Link";

export type NavbarMoleculeProps = {
  links: LinkAtomProps[];
  active: string;
  title?: string;
};

const NavbarMolecule = ({
  title,
  active,
  links,
}: NavbarMoleculeProps): ReactElement => {
  const items = links.map((link) => (
    <LinkAtom
      key={link.text}
      text={link.text}
      href={link.href}
      className={`nav-link ${link.href === active ? "active" : ""}`}
    />
  ));

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <LinkAtom
          text={title ?? "MyNavbar"}
          href="/"
          className="navbar-brand"
        />
        <div className="collapse navbar-collapse">
          <div className="navbar-nav">{items}</div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMolecule;
