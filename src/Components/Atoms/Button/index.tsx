import { ButtonHTMLAttributes, MouseEventHandler, ReactElement } from "react";

export type ButtonAtomProps = {
  type: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
};

const ButtonAtom = ({
  type,
  text,
  onClick,
  disabled,
  className,
}: ButtonAtomProps): ReactElement => {
  return (
    <button
      type={type ?? "button"}
      onClick={onClick}
      disabled={disabled ?? false}
      className={className ?? ""}
    >
      {text}
    </button>
  );
};

export default ButtonAtom;
