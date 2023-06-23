import { HTMLAttributeAnchorTarget, ReactElement } from "react";
import { Link } from "react-router-dom";

export type LinkAtomProps = {
  text: string;
  href: string;
  target?: HTMLAttributeAnchorTarget;
  className?: string;
};

const LinkAtom = ({
  text,
  href,
  target,
  className,
}: LinkAtomProps): ReactElement => {
  return (
    <Link to={href} target={target ?? "_self"} className={className ?? ""}>
      {text}
    </Link>
  );
};

export default LinkAtom;
