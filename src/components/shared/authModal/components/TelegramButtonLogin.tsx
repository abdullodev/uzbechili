import { useEffect, useRef } from "react";
import { useApiMutation } from "@/hooks/useApi/useApiHooks";
import { Loader } from "@/components";
import useGlobalContext from "@/context/useGlobal";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

declare global {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface Window {
    TelegramLoginWidget: {
      onAuth: (user: any) => void;
    };
  }
}

const TelegramButtonLogin = () => {
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const {
    actions: { setAuth },
  } = useGlobalContext();

  const TELEGRAM_BOT_NAME = import.meta.env.VITE_TELEGRAM_BOT_NAME;

  const { mutate, status } = useApiMutation("login/telegram", "post", {
    onSuccess(data) {
      // @ts-ignore
      localStorage.setItem("token", data.data.token);
      localStorage.setItem("auth", JSON.stringify(data.data));
      setAuth(false);
      navigate("/");
      toast.success("Success");
    },
  });

  useEffect(() => {
    if (ref.current === null) return;

    window.TelegramLoginWidget = {
      onAuth: (user: any) => {
        mutate(user);
      },
    };

    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.setAttribute("data-telegram-login", TELEGRAM_BOT_NAME);
    script.setAttribute("data-size", "large");
    script.setAttribute("data-radius", "12");
    script.setAttribute("data-request-access", "write");
    script.setAttribute("data-userpic", "true");
    script.setAttribute("data-onauth", "TelegramLoginWidget.onAuth(user)");
    script.async = true;
    ref.current.appendChild(script);

    return () => {
      ref.current?.removeChild(script);
    };
  }, []);

  if (status === "loading") return <Loader />;

  return <div ref={ref} />;
};

export default TelegramButtonLogin;
