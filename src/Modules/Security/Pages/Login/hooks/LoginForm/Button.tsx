import { Dispatch, SetStateAction } from "react";
import { ButtonAtomProps } from "../../../../../../Components/Atoms/Button";

type CreateUserResponse = {
  collectionId: string;
  collectionName: string;
  created: string;
  id: string;
  password: string;
  updated: string;
  user: string;
};

const createUser = async (
  user: string,
  password: string,
  setUser: Dispatch<SetStateAction<string>>,
  setPassword: Dispatch<SetStateAction<string>>
): Promise<void> => {
  const initData = await fetch(
    "http://127.0.0.1:8090/api/collections/myusers/records",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user, password }),
    }
  );
  const data: CreateUserResponse = await initData.json();
  console.log(data.id);
  console.log(data.user);
  console.log(data.password);
  setUser("");
  setPassword("");
};

const useLoginFormButtonHook = (
  [user, setUser]: [string, Dispatch<SetStateAction<string>>],
  [password, setPassword]: [string, Dispatch<SetStateAction<string>>],
  idForm: string
): ButtonAtomProps => {
  return {
    onClick: () => {
      console.log({ user, password });
      createUser(user, password, setUser, setPassword);
      const form = document.getElementById(idForm) as HTMLFormElement;
      form.reset();
    },
    text: "Sign in",
    type: "button",
    className: "btn btn-primary",
  } as ButtonAtomProps;
};

export default useLoginFormButtonHook;
