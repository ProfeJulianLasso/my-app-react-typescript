import { ButtonHTMLAttributes, MouseEventHandler, ReactElement } from "react";

export type ButtonAtomProps = {
  id?: string;
  text: string;
  form?: string;
  disabled?: boolean;
  className?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
};

const ButtonAtom = ({
  id,
  type,
  text,
  form,
  onClick,
  disabled,
  className,
}: ButtonAtomProps): ReactElement => {
  return (
    <button
      id={id}
      form={form}
      onClick={onClick}
      type={type ?? "button"}
      disabled={disabled ?? false}
      className={className ?? undefined}
    >
      {text}
    </button>
  );
};

export default ButtonAtom;
