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
  const ref = useRef<HTMLDivElement>(null);
  const TELEGRAM_BOT_NAME = import.meta.env.VITE_TELEGRAM_BOT_NAME;

  useEffect(() => {
    if (ref.current === null) return;

    window.TelegramLoginWidget = {
      onAuth: (user: any) => {
        // mutate(user);
        console.log(user);
      },
    };

    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?4";
    script.setAttribute("data-telegram-login", TELEGRAM_BOT_NAME);
    script.setAttribute("data-size", "large");
    script.setAttribute("data-radius", "10");
    script.setAttribute("data-request-access", "write");
    script.setAttribute("data-userpic", "true");
    script.setAttribute("data-onauth", "TelegramLoginWidget.onAuth(user)");
    script.async = true;
    ref.current.appendChild(script);

    return () => {
      ref.current?.removeChild(script);
    };
  }, []);

  return <div ref={ref} />;
};

export default TelegramButtonLogin;
