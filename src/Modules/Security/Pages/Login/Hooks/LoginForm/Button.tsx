import { useAuth0 } from "@auth0/auth0-react";
import { Dispatch, SetStateAction } from "react";
import { ButtonAtomProps } from "../../../../../../Components/Atoms/Button";

const useLoginFormButtonHook = (
  setUser: Dispatch<SetStateAction<string>>,
  setPassword: Dispatch<SetStateAction<string>>,
  idForm: string
): ButtonAtomProps => {
  const { loginWithRedirect } = useAuth0();

  return {
    onClick: () => {
      loginWithRedirect();
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
