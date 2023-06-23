import { HTMLAttributeAnchorTarget, ReactElement } from "react";

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
    <a href={href} target={target ?? "_self"} className={className ?? ""}>
      {text}
    </a>
  );
};

export default LinkAtom;
