import { InputAtomProps } from "../../../../../Components/Atoms/Input";
import { LabelAtomProps } from "../../../../../Components/Atoms/Label";

const useLoginFormUserHook = () => {
  const label: LabelAtomProps = {
    text: "User",
    htmlFor: "user",
  };
  const input: InputAtomProps = {
    type: "text",
    name: "user",
    id: "user",
  };
  return { label, input };
};

export default useLoginFormUserHook;
