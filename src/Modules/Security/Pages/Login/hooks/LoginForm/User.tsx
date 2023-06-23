import { Dispatch, SetStateAction, useState } from "react";
import { InputAtomProps } from "../../../../../../Components/Atoms/Input";
import { LabelAtomProps } from "../../../../../../Components/Atoms/Label";
import { LoginFormInputMoleculeProps } from "../../../../../../Components/Molecules/LoginForm";

type UseLoginFormUserHook = {
  userInput: LoginFormInputMoleculeProps;
  user: string;
  setUser: Dispatch<SetStateAction<string>>;
};

const useLoginFormUserHook = (): UseLoginFormUserHook => {
  const [user, setUser] = useState("");
  const label: LabelAtomProps = {
    text: "User",
    htmlFor: "user",
    className: "col-sm-2 col-form-label",
  };
  const input: InputAtomProps = {
    type: "text",
    name: "user",
    id: "user",
    className: "form-control",
    onChange(event) {
      setUser(event.target.value);
    },
  };
  return { userInput: { label, input }, user, setUser };
};

export default useLoginFormUserHook;
