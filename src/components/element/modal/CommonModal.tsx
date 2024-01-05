import React from "react";
import MUI_Modal, { ModalProps } from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import Icons from "@/assets/svgs";
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
    <MUI_Modal {...props} onClose={handleClose}>
      <CommonModalStyle>{children}</CommonModalStyle>
    </MUI_Modal>
  );
};

export default CommonModal;
