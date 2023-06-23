import { ButtonAtomProps } from "../../../../../Components/Atoms/Button";

const useLoginFormButtonHook = () => {
  return {
    onClick: () => {
      const data = "hola mundo";
      console.log(data);
    },
    text: "Login",
    type: "button",
  } as ButtonAtomProps;
};

export default useLoginFormButtonHook;
