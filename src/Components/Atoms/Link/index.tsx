import { HTMLAttributeAnchorTarget, ReactElement } from "react";
import { Link } from "react-router-dom";

export type LinkAtomProps = {
  id?: string;
  text: string;
  href: string;
  target?: HTMLAttributeAnchorTarget;
  className?: string;
};

const LinkAtom = ({
  id,
  text,
  href,
  target,
  className,
}: LinkAtomProps): ReactElement => {
  return (
    <Link id={id} to={href} target={target ?? "_self"} className={className}>
      {text}
    </Link>
  );
};

export default LinkAtom;
