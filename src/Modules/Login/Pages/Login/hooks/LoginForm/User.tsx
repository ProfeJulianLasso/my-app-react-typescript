import { Dispatch, SetStateAction } from "react";
import { InputAtomProps } from "../../../../../../Components/Atoms/Input";
import { LabelAtomProps } from "../../../../../../Components/Atoms/Label";

const useLoginFormUserHook = (
  setUser: Dispatch<SetStateAction<string>>
): {
  label: LabelAtomProps;
  input: InputAtomProps;
} => {
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
  return { label, input };
};

export default useLoginFormUserHook;
