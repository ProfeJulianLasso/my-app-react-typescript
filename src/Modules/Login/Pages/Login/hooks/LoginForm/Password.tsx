import { Dispatch, SetStateAction, useState } from "react";
import { InputAtomProps } from "../../../../../../Components/Atoms/Input";
import { LabelAtomProps } from "../../../../../../Components/Atoms/Label";
import { LoginFormInputMoleculeProps } from "../../../../../../Components/Molecules/LoginForm";

type UseLoginFormPasswordHook = {
  passwordInput: LoginFormInputMoleculeProps;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
};

const useLoginFormPasswordHook = (): UseLoginFormPasswordHook => {
  const [password, setPassword] = useState("");
  const label: LabelAtomProps = {
    text: "Password",
    htmlFor: "password",
    className: "col-sm-2 col-form-label",
  };
  const input: InputAtomProps = {
    type: "password",
    name: "password",
    id: "password",
    className: "form-control",
    onChange(event) {
      setPassword(event.target.value);
    },
  };
  return { passwordInput: { label, input }, password, setPassword };
};

export default useLoginFormPasswordHook;
