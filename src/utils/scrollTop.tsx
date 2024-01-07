import { useEffect } from "react";

export const useScrollTop = () => {
  const location = window.location;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  useEffect(() => {
    scrollToTop();
  }, [location]);

  return;
};
