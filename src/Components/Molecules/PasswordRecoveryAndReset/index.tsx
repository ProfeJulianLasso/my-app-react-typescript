import { ReactElement } from "react";
import LinkAtom, { LinkAtomProps } from "../../Atoms/Link";

export type PasswordRecoveryAndResetMoleculeProps = {
  recovery: LinkAtomProps;
  reset: LinkAtomProps;
};

const PasswordRecoveryAndResetMolecule = ({
  recovery,
  reset,
}: PasswordRecoveryAndResetMoleculeProps): ReactElement => {
  return (
    <>
      <LinkAtom text={recovery.text} href={recovery.href} /> -{" "}
      <LinkAtom text={reset.text} href={reset.href} />
    </>
  );
};

export default PasswordRecoveryAndResetMolecule;
