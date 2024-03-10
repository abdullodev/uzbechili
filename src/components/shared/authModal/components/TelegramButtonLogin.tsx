import { Loader } from "@/components";
import { useApiMutation } from "@/hooks/useApi/useApiHooks";
import { useEffect, useRef } from "react";

declare global {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface Window {
    TelegramLoginWidget: {
      onAuth: (user: any) => void;
    };
  }
}

const TelegramButtonLogin = () => {
  const telegramRef = useRef<HTMLDivElement>(null);

  const TELEGRAM_BOT_NAME = import.meta.env.VITE_TELEGRAM_BOT_NAME;

  const { mutate, status } = useApiMutation("login/telegram", "post", {
    onSuccess(data) {
      console.log(data);
    },
  });

  useEffect(() => {
    console.log(telegramRef.current);
    if (telegramRef.current === null) return;

    window.TelegramLoginWidget = {
      onAuth: (user: any) => {
        mutate(user);
      },
    };

    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.setAttribute("data-telegram-login", TELEGRAM_BOT_NAME);
    script.setAttribute("data-size", "large");
    script.setAttribute("data-radius", "10");
    script.setAttribute("data-request-access", "write");
    script.setAttribute("data-userpic", "true");
    script.setAttribute("data-onauth", "TelegramLoginWidget.onAuth(user)");
    script.async = true;
    telegramRef?.current?.appendChild(script);

    return () => {
      telegramRef.current?.removeChild(script);
    };
  }, [TELEGRAM_BOT_NAME]);

  if (status === "loading") return <Loader />;

  return <div ref={telegramRef} />;
};

export default TelegramButtonLogin;
