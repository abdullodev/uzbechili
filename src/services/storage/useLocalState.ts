import { useEffect, useState } from "react";
import browserStorage from "./browserStorage";

export const useLocalState = <T>(
  defaultValue: any,
  {
    key = "localStorageState",
  }: {
    key: string;
  }
): [T, React.Dispatch<React.SetStateAction<T>>, () => any] => {
  const [localStorageState, setLocalStorageState] = useState<T>(defaultValue);

  // useEffect(() => {
  //   setLocalStorageState()
  // }, [])

  useEffect(() => {
    browserStorage.set(key as any, localStorageState || null);
  }, [localStorageState]);

  const getState = () => {
    return JSON.parse(browserStorage.get(key as any));
  };

  return [localStorageState, setLocalStorageState, getState];
};
