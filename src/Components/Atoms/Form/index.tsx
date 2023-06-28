import { FormEvent, ReactNode } from "react";

export type FormAtomProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
};

const FormAtom = ({ id, onSubmit, children, className }: FormAtomProps) => {
  return (
    <form id={id} className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default FormAtom;
