import { ReactElement } from "react";
import Button, { ButtonAtomProps } from "../../Atoms/Button";
import FormAtom from "../../Atoms/Form";
import Input, { InputAtomProps } from "../../Atoms/Input";
import Label, { LabelAtomProps } from "../../Atoms/Label";

export type SearchPropsMolecule = {
  label: LabelAtomProps;
  input: InputAtomProps;
  button: ButtonAtomProps;
};

const SearchFormMolecule = ({
  label,
  input,
  button,
}: SearchPropsMolecule): ReactElement => {
  return (
    <div>
      <h1>Search</h1>
      <FormAtom>
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
      </FormAtom>
    </div>
  );
};

export default SearchFormMolecule;
