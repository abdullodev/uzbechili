import { ButtonProps } from "@mui/material";
import { ButtonStyled, IconButtonStyled } from "./ButtonStyled";

interface ICommonButton extends ButtonProps {
  title?: string;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  icon?: React.ReactNode;
  iconButton?: boolean;
}

const CommonButton: React.FC<ICommonButton> = ({
  endIcon,
  startIcon,
  icon,
  title,
  iconButton = false,
  ...props
}) => {
  return (
    <>
      {!iconButton ? (
        <ButtonStyled {...props} startIcon={startIcon} endIcon={endIcon}>
          {title}
        </ButtonStyled>
      ) : (
        <IconButtonStyled {...props}>{icon}</IconButtonStyled>
      )}
    </>
  );
};

export default CommonButton;
