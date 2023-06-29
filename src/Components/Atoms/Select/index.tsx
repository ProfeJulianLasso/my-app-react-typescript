import { ReactElement, SelectHTMLAttributes } from "react";

export type SelectAtomProps = {
  id?: string;
  value?: string;
  disabled?: boolean;
  className?: string;
  options: Array<SelectAtomOption>;
  onChange: SelectHTMLAttributes<HTMLSelectElement>["onChange"];
};

export type SelectAtomOption = {
  value: string;
  label: string;
};

const SelectAtom = ({
  id,
  options,
  value,
  onChange,
  disabled,
  className,
}: SelectAtomProps): ReactElement => {
  return (
    <select
      id={id}
      value={value}
      onChange={onChange}
      className={className}
      disabled={disabled ?? false}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectAtom;
