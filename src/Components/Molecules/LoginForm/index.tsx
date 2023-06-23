import { ReactElement } from "react";
import Button, { ButtonAtomProps } from "../../Atoms/Button";
import Input, { InputAtomProps } from "../../Atoms/Input";
import Label, { LabelAtomProps } from "../../Atoms/Label";

export type LoginFormInputMoleculeProps = {
  label: LabelAtomProps;
  input: InputAtomProps;
};

export type LoginFormMoleculeProps = {
  user: LoginFormInputMoleculeProps;
  password: LoginFormInputMoleculeProps;
  button: ButtonAtomProps;
};

const LoginFormMolecule = ({
  user,
  password,
  button,
}: LoginFormMoleculeProps): ReactElement => {
  return (
    <form>
      <h1>Login</h1>
      <div>
        <Label text={user.label.text} htmlFor={user.label.htmlFor} />
        <Input
          id={user.input.id}
          type={user.input.type}
          name={user.input.name}
          value={user.input.value}
          disabled={user.input.disabled}
          className={user.input.className}
        />
        <Label text={password.label.text} htmlFor={password.label.htmlFor} />
        <Input
          id={password.input.id}
          type={password.input.type}
          name={password.input.name}
          value={password.input.value}
          disabled={password.input.disabled}
          className={password.input.className}
        />
        <Button
          type={button.type}
          text={button.text}
          onClick={button.onClick}
          className={button.className}
          disabled={button.disabled}
        />
      </div>
    </form>
  );
};

export default LoginFormMolecule;
