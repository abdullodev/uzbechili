import React, { FC, createContext, useContext, useState } from "react";

const useGlobal = () => {
  const [auth, setAuth] = useState<boolean>(false);

  return {
    state: { auth },
    actions: { setAuth },
  };
};

const GlobalContext = createContext<any>({ state: {}, actions: {} });

export const GlobalContextProvider: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const value = useGlobal();
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
export default function useGlobalContext() {
  return useContext<ReturnType<typeof useGlobal>>(GlobalContext);
}
