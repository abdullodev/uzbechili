import { useRequest } from "@/services/useRequest/useRequest";
import React, { FC, createContext, useContext } from "react";
import { ILogin_body, IVerify_body } from "./addModal.types";

const useAuthModal = () => {
  const [loginClient, loginData, loginStatus, loginError] = useRequest();
  const login = (body: ILogin_body) => {
    loginClient.post("/sing-in", body);
  };
  const [verifyClient, verifyData, verifyStatus, verifyError] = useRequest();

  const verify = (body: IVerify_body) => {
    verifyClient.post("/sing-in/verify", body);
  };

  return {
    state: {
      loginState: { loginData, loginStatus, loginError },
      verifyState: { verifyData, verifyStatus, verifyError },
    },
    actions: {
      login,
      verify,
    },
  };
};

const AuthModalContext = createContext<any>({ state: {}, actions: {} });

export const AuthModalProvider: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const value = useAuthModal();
  return (
    <AuthModalContext.Provider value={value}>
      {children}
    </AuthModalContext.Provider>
  );
};
export default function useAuthModalContext() {
  return useContext<ReturnType<typeof useAuthModal>>(AuthModalContext);
}
