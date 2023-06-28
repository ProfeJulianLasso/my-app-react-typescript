import { ReactElement } from "react";

export type LabelAtomProps = {
  id?: string;
  text: string;
  htmlFor?: string;
  className?: string;
};

const LabelAtom = ({
  id,
  text,
  htmlFor,
  className,
}: LabelAtomProps): ReactElement => {
  return (
    <label id={id} htmlFor={htmlFor} className={className}>
      {text}
    </label>
  );
};

export default LabelAtom;
