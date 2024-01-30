import { Drawer, IconButton, Modal } from "@mui/material";
import React, { useState } from "react";
import { DetailsStyle } from "../container/Order.style";
import Icons from "@/assets/svgs";
import { CommonButton } from "@/components";
import { ModalStyle } from "@/pages/profile/container/Profile.style";
import { get } from "lodash";

interface IOrderDetails {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  order: Record<string, any>;
}
const OrderDetail = ({ show, order, setShow }: IOrderDetails) => {
  const [cancel, setCancel] = useState<boolean>(false);

  const cancelOrder = () => {
    console.log("cancelled");
    setCancel(false);
    setShow(false);
  };
  return (
    <Drawer anchor={"bottom"} open={show} onClose={() => setShow(false)}>
      <DetailsStyle>
        <div className="box">
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
              <h2>Product info</h2>
              <span
                className={`order_state  ${
                  get(order, "state", "") === "cancelled" && "cancelled"
                } `}
              >
                {get(order, "state", "") === "new"
                  ? "Yaratildi"
                  : get(order, "state", "") === "inProgress"
                  ? "Jarayonda"
                  : get(order, "state", "") === "completed"
                  ? "Tugatildi"
                  : "Bekor qilindi"}
              </span>
            </div>
            <IconButton
              onClick={() => setShow(false)}
              sx={{ width: "40px", height: "40px" }}
            >
              <Icons.closeIcon />
            </IconButton>
          </div>
        </div>
        <div className="border"></div>

        <div className="d-flex flex-wrap gap-4">
          <div>
            <h2>
              Order number:{" "}
              <span className="order_number">#{get(order, "uuid", 0)}</span>{" "}
            </h2>
          </div>
          <CommonButton
            className="cancel"
            title="Buyurtmani bekor qilish"
            onClick={() => setCancel(true)}
          />
        </div>
      </DetailsStyle>

      <Modal
        open={cancel}
        onClose={() => setCancel(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalStyle>
          <h3>Rosdan ham buyurtmani bekor qilmoqchimisiz?</h3>
          <div className="d-flex gap-2">
            <CommonButton
              title="Yo'q"
              className="no"
              onClick={() => setCancel(false)}
            />
            <CommonButton title="Ha" className="yes" onClick={cancelOrder} />
          </div>
        </ModalStyle>
      </Modal>
    </Drawer>
  );
};

export default OrderDetail;
