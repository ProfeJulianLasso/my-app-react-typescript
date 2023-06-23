import { Dispatch, SetStateAction } from "react";
import { ButtonAtomProps } from "../../../../../../Components/Atoms/Button";

const useLoginFormButtonHook = (
  [user, setUser]: [string, Dispatch<SetStateAction<string>>],
  [password, setPassword]: [string, Dispatch<SetStateAction<string>>],
  idForm: string
): ButtonAtomProps => {
  return {
    onClick: () => {
      console.log({ user, password });
      const form = document.getElementById(idForm) as HTMLFormElement;
      form.reset();
      setUser("");
      setPassword("");
    },
    text: "Sign in",
    type: "button",
    className: "btn btn-primary",
  } as ButtonAtomProps;
};

export default useLoginFormButtonHook;
