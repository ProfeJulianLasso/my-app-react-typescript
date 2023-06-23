import { PasswordRecoveryAndResetMoleculeProps } from "../../../../../Components/Molecules/PasswordRecoveryAndReset";

const useRecoveryAndResetPassword =
  (): PasswordRecoveryAndResetMoleculeProps => {
    return {
      recovery: {
        text: "Recovery",
        href: "/recovery",
      },
      reset: {
        text: "Reset",
        href: "/reset",
      },
    } as PasswordRecoveryAndResetMoleculeProps;
  };

export default useRecoveryAndResetPassword;
