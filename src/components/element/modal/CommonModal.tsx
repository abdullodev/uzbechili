import MUI_Modal, { ModalProps } from "@mui/material/Modal";
import React from "react";
import { CommonModalStyle } from "./CommonModal.style";

interface ICommonModal extends ModalProps {
  open: boolean;
  canClose?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const CommonModal: React.FC<ICommonModal> = ({
  children,
  canClose = true,
  setOpen,
  ...props
}) => {
  const handleClose = () => {
    canClose && setOpen?.(false);
  };

  return (
    <MUI_Modal
      {...props}
      onClose={handleClose}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <CommonModalStyle>{children}</CommonModalStyle>
    </MUI_Modal>
  );
};

export default CommonModal;
