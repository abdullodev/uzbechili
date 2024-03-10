import { Loader } from "@/components";
import { useApiMutation } from "@/hooks/useApi/useApiHooks";
import { useEffect } from "react";

declare global {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface Window {
    TelegramLoginWidget: {
      onAuth: (user: any) => void;
    };
  }
}

const TelegramButtonLogin = () => {
  // const telegramRef = useRef<HTMLDivElement>(null);

  const TELEGRAM_BOT_NAME = import.meta.env.VITE_TELEGRAM_BOT_NAME;

  const { mutate, status } = useApiMutation("login/telegram", "post", {
    onSuccess(data) {
      console.log(data);
    },
  });

  useEffect(() => {
    // Load Telegram Login Widget script dynamically
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?5";
    script.async = true;
    script.setAttribute("data-telegram-login", TELEGRAM_BOT_NAME);
    script.setAttribute("data-size", "large");
    script.setAttribute("data-radius", "10");
    script.setAttribute("data-auth-url", ""); // Endpoint to handle authentication on your server
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (status === "loading") return <Loader />;

  return (
    <div>
      {/* Telegram Login button */}
      <script type="text/javascript">
        {`
        window.onload = function() {
          Telegram.Widget.on('auth', function(user) {
            console.log(user);
            ${mutate.toString()}{user}
          });
        }
      `}
      </script>
    </div>
  );
};

export default TelegramButtonLogin;
