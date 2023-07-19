import React, { useContext } from "react";
import { UserInterface } from "@/types/user";

export const UserContext = React.createContext<{ user?: UserInterface }>({});

export const useUser = () => {
  const ctx = useContext(UserContext);
  return ctx;
};
