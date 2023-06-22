import Button, { ButtonProps } from "../../Atoms/Button";
import Input, { InputProps } from "../../Atoms/Input";
import Label, { LabelProps } from "../../Atoms/Label";

type SearchProps = {
  label: LabelProps;
  input: InputProps;
  button: ButtonProps;
};

const SearchForm = ({ label, input, button }: SearchProps) => {
  return (
    <div>
      <h1>Search</h1>
      <div>
        <Label text={label.text} />
        <Input
          type={input.type}
          value={input.value}
          disabled={input.disabled}
          className={input.className}
        />
        <Button
          type={button.type}
          text={button.text}
          onClick={button.onClick}
          className={button.className}
          disabled={button.disabled}
        />
      </div>
    </div>
  );
};

export default SearchForm;
