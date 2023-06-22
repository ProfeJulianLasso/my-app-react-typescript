export type InputProps = {
  type: "text" | "password" | "email" | "number";
  value?: string | number;
  disabled?: boolean;
  className?: string;
};

const Input = ({ type, value, disabled, className }: InputProps) => {
  return (
    <input
      type={type}
      disabled={disabled ?? false}
      className={className ?? ""}
      value={value ?? ""}
    />
  );
};

export default Input;
