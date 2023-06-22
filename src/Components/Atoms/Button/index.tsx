import { ButtonHTMLAttributes } from "react";

export type ButtonAtomProps = {
  type: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  text: string;
  readonly onClick: () => void;
  disabled?: boolean;
  className?: string;
};

const ButtonAtom = ({
  type,
  text,
  onClick,
  disabled,
  className,
}: ButtonAtomProps) => {
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
