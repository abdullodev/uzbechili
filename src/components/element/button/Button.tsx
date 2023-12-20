import { Button, ButtonProps } from "antd";

interface ICommonButton extends ButtonProps {
  title: string;
}

const CommonButton: React.FC<ICommonButton> = ({ title, ...props }) => {
  return (
    <Button {...props} color="red">
      {title || "Qo'shish"}
    </Button>
  );
};

export default CommonButton;
