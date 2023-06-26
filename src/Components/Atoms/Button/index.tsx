import { ButtonHTMLAttributes, MouseEventHandler, ReactElement } from "react";

export type ButtonAtomProps = {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
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
