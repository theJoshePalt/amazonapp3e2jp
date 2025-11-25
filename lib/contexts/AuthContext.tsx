import { createContext } from "react";

export type UserData = {
  id: string;
  username: string;
  password: string;
};

export type AuthContextType = {
  user: UserData | null;
  login: (user: UserData) => void;
  logout: () => void;
};


export const AuthContext = createContext<AuthContextType | null>(null);
