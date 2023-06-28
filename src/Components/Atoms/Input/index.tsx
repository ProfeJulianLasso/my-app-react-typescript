import { ChangeEvent, HTMLInputTypeAttribute, ReactElement } from "react";

export type InputAtomProps = {
  id?: string;
  name?: string;
  type: HTMLInputTypeAttribute;
  value?: string | number;
  readonly?: boolean;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const InputAtom = ({
  id,
  type,
  name,
  value,
  disabled,
  readonly,
  onChange,
  className,
  placeholder,
}: InputAtomProps): ReactElement => {
  return (
    <input
      id={id}
      type={type}
      name={name}
      onChange={onChange}
      defaultValue={value}
      className={className}
      placeholder={placeholder}
      readOnly={readonly ?? false}
      disabled={disabled ?? false}
    />
  );
};

export default InputAtom;
