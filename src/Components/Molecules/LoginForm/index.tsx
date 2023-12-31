import { ReactElement } from "react";
import ButtonAtom, { ButtonAtomProps } from "../../Atoms/Button";
import FormAtom from "../../Atoms/Form";
import InputAtom, { InputAtomProps } from "../../Atoms/Input";
import LabelAtom, { LabelAtomProps } from "../../Atoms/Label";
import "./styles.css";

export type LoginFormInputMoleculeProps = {
  label: LabelAtomProps;
  input: InputAtomProps;
};

export type LoginFormMoleculeProps = {
  user: LoginFormInputMoleculeProps;
  password: LoginFormInputMoleculeProps;
  button: ButtonAtomProps;
  idForm: string;
};

const LoginFormMolecule = ({
  user,
  password,
  button,
  idForm,
}: LoginFormMoleculeProps): ReactElement => {
  return (
    <>
      <h2 className="title-form">Sign in to MyApp</h2>
      <FormAtom className="form d-grid gap-2" id={idForm}>
        <div className="mb-3 row">
          <LabelAtom
            text={user.label.text}
            htmlFor={user.label.htmlFor}
            className={user.label.className ?? ""}
          />
          <div className="col-sm-10">
            <InputAtom
              id={user.input.id}
              type={user.input.type}
              name={user.input.name}
              value={user.input.value}
              disabled={user.input.disabled}
              onChange={user.input.onChange}
              className={user.input.className}
              placeholder={user.input.placeholder}
              readonly={user.input.readonly ?? false}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <LabelAtom
            text={password.label.text}
            htmlFor={password.label.htmlFor}
            className={password.label.className}
          />
          <div className="col-sm-10">
            <InputAtom
              id={password.input.id}
              type={password.input.type}
              name={password.input.name}
              value={password.input.value}
              disabled={password.input.disabled}
              onChange={password.input.onChange}
              className={password.input.className}
              placeholder={password.input.placeholder}
              readonly={password.input.readonly ?? false}
            />
          </div>
        </div>
        <div className="d-grid">
          <ButtonAtom
            type={button.type}
            text={button.text}
            onClick={button.onClick}
            disabled={button.disabled}
            className={button.className}
          />
        </div>
      </FormAtom>
    </>
  );
};

export default LoginFormMolecule;
