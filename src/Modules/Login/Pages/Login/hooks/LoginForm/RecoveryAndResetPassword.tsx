import { PasswordRecoveryAndResetMoleculeProps } from "../../../../../../Components/Molecules/PasswordRecoveryAndReset";

const useRecoveryAndResetPassword =
  (): PasswordRecoveryAndResetMoleculeProps => {
    return {
      recovery: {
        text: "Did you forget your password?",
        href: "/recovery",
      },
      reset: {
        text: "Do you want to reset your password?",
        href: "/reset",
      },
    } as PasswordRecoveryAndResetMoleculeProps;
  };

export default useRecoveryAndResetPassword;
