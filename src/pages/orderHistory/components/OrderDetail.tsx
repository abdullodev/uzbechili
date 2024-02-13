import { Drawer, Grid, IconButton, Modal } from "@mui/material";
import React, { useState } from "react";
import { DetailsStyle } from "../container/Order.style";
import Icons from "@/assets/svgs";
import { CommonButton } from "@/components";
import { ModalStyle } from "@/pages/profile/container/Profile.style";
import { get } from "lodash";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";

interface IOrderDetails {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  order: Record<string, any>;
}
const OrderDetail = ({ show, order, setShow }: IOrderDetails) => {
  const [cancel, setCancel] = useState<boolean>(false);

  const { t } = useTranslation();

  const cancelOrder = () => {
    setCancel(false);
    setShow(false);
  };

  return (
    <Drawer
      anchor={"bottom"}
      open={show}
      onClose={() => setShow(false)}
      PaperProps={{ elevation: 0, style: { backgroundColor: "transparent" } }}
    >
      <DetailsStyle>
        <div className="box">
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
              <h2>{t("orders.about_order")}</h2>
              <span
                className={`order_state  ${
                  get(order, "state", "") === "cancelled" && "cancelled"
                } `}
              >
                {get(order, "state", "") === "new"
                  ? t("orders.created")
                  : get(order, "state", "") === "inProgress"
                  ? t("orders.inProccess")
                  : get(order, "state", "") === "completed"
                  ? t("orders.completed")
                  : t("orders.cancelled")}
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

        <Grid container spacing={2}>
          <Grid item md={4} xs={12}>
            <div className="d-flex flex-wrap gap-2 flex-column">
              <div className="d-flex flex-column gap-1 box-info">
                <div className="d-flex flex-column gap-1">
                  <p>{t("orders.about_order")}</p>
                  <h4>
                    {t("orders.order_number")}
                    <span className="order_number">
                      #{get(order, "uuid", 0)}
                    </span>{" "}
                  </h4>
                  <span>
                    {dayjs(get(order, "createdAt", "")).format(
                      "DD-MM-YYYY | HH:mm"
                    )}
                  </span>
                </div>

                <div className="d-flex flex-column gap-1">
                  <p>{t("orders.order_user")}</p>
                  <div className="d-flex align-items-center gap-2">
                    <Icons.userIcon />
                    <div>
                      <h4>{get(order, "receiverName", "")}</h4>
                      <p className="text-grey">
                        {get(order, "receiverPhoneNumber", "")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-column gap-1">
                  <p>{t("orders.address")}</p>
                  <div className="d-flex align-items-center gap-2">
                    <Icons.locationIcon />
                    <div>
                      <h4>
                        {get(order, "client.address.region", "") +
                          ", " +
                          get(order, "client.address.district", "") +
                          ", " +
                          get(order, "client.address.flatNumber", "")}
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-column gap-1">
                  <p>{t("orders.payment")}</p>
                  <div className="d-flex align-items-center gap-2">
                    <Icons.PaymentIcon />
                    <div>
                      <h4>{get(order, "totalPriceWithPromoCode", "")}</h4>
                      <p className="text-grey">
                        {get(order, "paymentMethod", "") === "cash" && "Naqd"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {get(order, "state", "") === "new" && (
                <div className="d-flex justify-content-center">
                  <CommonButton
                    className="cancel"
                    title={t("orders.cancel_order")}
                    onClick={() => setCancel(true)}
                    sx={{ width: "100% !important" }}
                  />
                </div>
              )}
            </div>
          </Grid>
          <Grid item md={7} xs={12}>
            <div className="d-flex flex-column gap-2">
              {get(order, "orderItems", []).map((item: Record<string, any>) => (
                <div className="product_box">
                  <div className="image">
                    {get(item, "productsInfo.imageUrls", [])[0] ? (
                      <img
                        src={
                          import.meta.env.VITE_BASE_URL +
                          get(item, "productsInfo.imageUrls", [])[0]
                        }
                        alt={get(item, "productsInfo.imageUrls", [])[0]}
                      />
                    ) : (
                      <Icons.TshirtIcon />
                    )}
                  </div>
                  <div className="product_info">
                    <div className="d-flex justify-content-between">
                      <p className="text-grey">{t("orders.name")}</p>
                      <p>{get(item, "productsInfo.name", "")}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="text-grey">{t("orders.size")}</p>
                      <p>{get(item, "size", "")}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="text-grey">{t("orders.color")}</p>
                      <p>{get(item, "color", "")}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      </DetailsStyle>

      <Modal
        open={cancel}
        onClose={() => setCancel(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalStyle>
          <h3>{t("orders.realy_cancel")}</h3>
          <div className="d-flex gap-2">
            <CommonButton
              title={t("common.no")}
              className="no"
              onClick={() => setCancel(false)}
            />
            <CommonButton
              title={t("common.yes")}
              className="yes"
              onClick={cancelOrder}
            />
          </div>
        </ModalStyle>
      </Modal>
    </Drawer>
  );
};

export default OrderDetail;
