import React, {
  FC,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { ICart } from "@/types/types.common";
import { toast } from "react-hot-toast";
import { useApi } from "@/hooks/useApi/useApiHooks";

const useGlobal = () => {
  const [auth, setAuth] = useState<boolean>(false);
  const [baskets, setBaskets] = useState<ICart[]>([]);

  const { data: siteSettings } = useApi("/general-settings");
  const { data: promocode } = useApi("/promo-code/65accb9c527dbdb82619e8cd");

  const addToCart = (cart: ICart) => {
    const carts = JSON.parse(localStorage.getItem("cart") || "[]");
    const found = carts.find(
      (item: ICart) =>
        item.productId === cart.productId &&
        item.size === cart.size &&
        item.color === cart.color
    );

    if (found) {
      carts.map((item: ICart) => {
        if (
          found.productId === item.productId &&
          found.color === item.color &&
          found.size === item.size
        ) {
          return { ...item, count: item.count++ };
        }

        return item;
      });
    } else {
      carts.push(cart);
      toast.success("Karzinkaga qo'shildi");
    }
    setBaskets(carts);
    localStorage.setItem("cart", JSON.stringify(carts));
  };

  const removeCart = (cart: ICart) => {
    const carts = JSON.parse(localStorage.getItem("cart") || "[]");
    const found = carts.find(
      (item: ICart) =>
        item.productId === cart.productId &&
        item.size === cart.size &&
        item.color === cart.color
    );

    if (found && found.count > 1) {
      carts.map((item: ICart) => {
        if (
          found.productId === item.productId &&
          found.color === item.color &&
          found.size === item.size
        ) {
          return { ...item, count: item.count-- };
        }

        return item;
      });
    } else {
      carts.filter((item: ICart) => item.productId !== cart.productId);
    }
    setBaskets(carts);
    localStorage.setItem("cart", JSON.stringify(carts));
  };

  const deleteCart = (cart: ICart) => {
    const carts = JSON.parse(localStorage.getItem("cart") || "[]");

    const foundIndex = carts.findIndex(
      (item: ICart) =>
        item.productId === cart.productId &&
        item.color === cart.color &&
        item.size === cart.size
    );

    carts.splice(foundIndex, 1);

    setBaskets(carts);
    localStorage.setItem("cart", JSON.stringify(carts));
  };
  const deleteAll = () => {
    setBaskets([]);
    localStorage.removeItem("cart");
  };

  useEffect(() => {
    const carts = JSON.parse(localStorage.getItem("cart") || "[]");
    setBaskets(carts);
  }, []);

  return {
    state: { auth, baskets, siteSettings, promocode },
    actions: { setAuth, addToCart, removeCart, deleteCart, deleteAll },
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
