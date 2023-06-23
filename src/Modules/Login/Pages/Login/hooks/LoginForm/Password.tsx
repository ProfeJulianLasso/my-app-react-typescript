import { Dispatch, SetStateAction } from "react";
import { InputAtomProps } from "../../../../../../Components/Atoms/Input";
import { LabelAtomProps } from "../../../../../../Components/Atoms/Label";
import { LoginFormInputMoleculeProps } from "../../../../../../Components/Molecules/LoginForm";

const useLoginFormPasswordHook = (
  setPassword: Dispatch<SetStateAction<string>>
): LoginFormInputMoleculeProps => {
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
  return { label, input };
};

export default useLoginFormPasswordHook;
