import { CommonButton } from "@/components";
import axios from "axios";
import { useEffect } from "react";

const TelegramButtonLogin = () => {
  const TELEGRAM_BOT_NAME = import.meta.env.VITE_TELEGRAM_BOT_NAME;

  useEffect(() => {
    // Load Telegram Login Widget script dynamically
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?5";
    script.async = true;
    script.setAttribute("data-telegram-login", TELEGRAM_BOT_NAME);
    script.setAttribute("data-size", "large");
    script.setAttribute("data-radius", "10");
    script.setAttribute("data-auth-url", "/auth"); // Empty since we'll handle the authentication in the script
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleTelegramAuth = (user: any) => {
    // Post user data to your server's authentication endpoint
    axios
      .post("/login/telegram", user)
      .then((response) => {
        // Handle successful authentication response
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });
  };

  const triggerTelegramLogin = () => {
    // Trigger Telegram login button click programmatically
    const telegramButton = document.querySelector("[data-telegram-login]");
    if (telegramButton instanceof HTMLElement) {
      telegramButton.click();
    }
  };

  return (
    <div>
      <CommonButton
        className="telegram"
        title="Telegram orqali kirish"
        onClick={triggerTelegramLogin}
      />
      <script type="text/javascript">
        {`
         window.onload = function() {
          Telegram.Widget.on('auth', function(user) {
            // Handle user authentication data here
            console.log(user);
            // Post user data to your server
            ${handleTelegramAuth.toString()}(user);
          });
        }
      `}
      </script>
    </div>
  );
};

export default TelegramButtonLogin;
