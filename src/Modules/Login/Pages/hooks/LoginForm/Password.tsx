import { InputAtomProps } from "../../../../../Components/Atoms/Input";
import { LabelAtomProps } from "../../../../../Components/Atoms/Label";

const useLoginFormPasswordHook = (): {
  label: LabelAtomProps;
  input: InputAtomProps;
} => {
  const label: LabelAtomProps = {
    text: "Password",
    htmlFor: "password",
  };
  const input: InputAtomProps = {
    type: "password",
    name: "password",
    id: "password",
  };
  return { label, input };
};

export default useLoginFormPasswordHook;
