import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { InputAtomProps } from "../../../../../../Components/Atoms/Input";
import { LabelAtomProps } from "../../../../../../Components/Atoms/Label";
import { LoginFormInputMoleculeProps } from "../../../../../../Components/Molecules/LoginForm";

type UseLoginFormUserHook = {
  userInput: LoginFormInputMoleculeProps;
  user: string;
  setUser: Dispatch<SetStateAction<string>>;
};

const useLoginFormUserHook = (): UseLoginFormUserHook => {
  const [user, setUser] = useState<string>("");
  const id = "user";

  const label: LabelAtomProps = {
    text: "User",
    htmlFor: id,
    className: "col-sm-2 col-form-label",
  };
  const input: InputAtomProps = {
    type: "text",
    name: id,
    id,
    className: "form-control",
    onChange(event: ChangeEvent<HTMLInputElement>): void {
      setUser(event.target.value);
    },
  };
  return {
    userInput: { label, input },
    user,
    setUser,
  };
};

export default useLoginFormUserHook;
