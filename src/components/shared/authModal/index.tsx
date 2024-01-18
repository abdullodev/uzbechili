import AuthModal from "./container/authModal";
import { AuthModalProvider } from "./context/autoModal.context";

const index = () => {
  return (
    <AuthModalProvider>
      <AuthModal />
    </AuthModalProvider>
  );
};

export default index;
