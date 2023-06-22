import Button, { ButtonProps } from "../../Atoms/Button";
import Input, { InputProps } from "../../Atoms/Input";
import Label, { LabelProps } from "../../Atoms/Label";

export type LoginFormProps = {
  userLabel: LabelProps;
  userInput: InputProps;
  passLabel: LabelProps;
  passInput: InputProps;
  button: ButtonProps;
};

const LoginForm = (props: LoginFormProps) => {
  return (
    <div>
      <h1>Login</h1>
      <div>
        <Label text={props.userLabel.text} />
        <Input
          type={props.userInput.type}
          value={props.userInput.value}
          disabled={props.userInput.disabled}
          className={props.userInput.className}
        />
        <Label text={props.passLabel.text} />
        <Input
          type={props.passInput.type}
          value={props.passInput.value}
          disabled={props.passInput.disabled}
          className={props.passInput.className}
        />
        <Button
          type={props.button.type}
          text={props.button.text}
          onClick={props.button.onClick}
          className={props.button.className}
          disabled={props.button.disabled}
        />
      </div>
    </div>
  );
};

export default LoginForm;
