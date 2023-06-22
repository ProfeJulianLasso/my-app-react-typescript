export type ButtonProps = {
  type: "button" | "submit" | "reset";
  text: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
};

const Button = ({ type, text, onClick, disabled, className }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled ?? false}
      className={className ?? ""}
    >
      {text}
    </button>
  );
};

export default Button;
