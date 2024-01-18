import { useRequest } from "@/services/useRequest/useRequest";
import { IAuth } from "@/types/interfaces";
import React, { FC, createContext, useContext } from "react";
import { ILogin_body, IRegister_body, IVerify_body } from "./addModal.types";

const useAuthModal = () => {
  const [registerClient, registerData, registerStatus, registerError] =
    useRequest<string, IRegister_body>();

  const register = (body: IRegister_body) => {
    registerClient.post("auth/register", body);
  };

  const [
    loginClient,
    loginData,
    loginStatus,
    loginError,
    { resetRequest: resetLoginRequest },
  ] = useRequest<string>();
  const login = (body: ILogin_body) => {
    loginClient.post("auth/login", body);
  };

  const [
    verifyClient,
    verifyData,
    verifyStatus,
    verifyError,
    { resetRequest: resetVerifyStatus },
  ] = useRequest<IAuth, IVerify_body>();

  const verify = (body: IVerify_body) => {
    verifyClient.post("auth/verify", body);
  };

  return {
    state: {
      registerState: { registerData, registerStatus, registerError },
      loginState: { loginData, loginStatus, loginError },
      verifyState: { verifyData, verifyStatus, verifyError, resetVerifyStatus },
    },
    actions: {
      register,
      login,
      verify,
      resetLoginRequest,
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
