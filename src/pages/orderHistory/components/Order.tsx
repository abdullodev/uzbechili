import { get } from "lodash";
import { OrderBox } from "../container/Order.style";
import { numberFormat } from "@/utils/numberFormat";
import dayjs from "dayjs";
import OrderDetail from "./OrderDetail";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Order = ({ order }: { order: Record<string, any> }) => {
  const [showOrder, setShowOrder] = useState<boolean>(false);
  const { t } = useTranslation();

  const state =
    get(order, "state", "") === "new"
      ? 1
      : get(order, "state", "") === "inProgress"
      ? 2
      : get(order, "state", "") === "completed"
      ? 3
      : 0;

  return (
    <>
      <OrderBox onClick={() => setShowOrder(true)}>
        <div className="state_box">
          {order.state === "cancelled" && (
            <div className={`d-flex direction-column gap-1 cancelled`}>
              <span className={"state_title"}>{t("orders.cancel")}</span>
              <span className={"state_line"}></span>
            </div>
          )}
          {order.state !== "cancelled" && (
            <div
              className={`d-flex direction-column gap-1 ${state && "active"}`}
            >
              <span className={"state_title"}>{t("orders.created")}</span>
              <span className={"state_line"}></span>
            </div>
          )}
          <div
            className={`d-flex direction-column gap-1 ${state > 1 && "active"}`}
          >
            <span className={"state_title"}>{t("orders.inProccess")}</span>
            <span className={"state_line"}></span>
          </div>
          <div
            className={`d-flex direction-column gap-1 ${state > 2 && "active"}`}
          >
            <span className={"state_title"}>{t("orders.completed")}</span>
            <span className={"state_line"}></span>
          </div>
        </div>

        <div className="d-flex justify-content-between border-bottom-dashed py-3">
          <h3>
            {t("orders.order")}
            <span className="color-main">№{get(order, "uuid", "1")}</span>
          </h3>
          <h3>
            {numberFormat(get(order, "totalPrice", "1"))}{" "}
            <span className="color-grey">uzs</span>
          </h3>
        </div>

        <div className="pt-3">
          <h4>
            <span className="color-grey">{t("orders.address")}</span>{" "}
            {get(order, "client.address.region", "") +
              ", " +
              get(order, "client.address.district", "") +
              ", " +
              get(order, "client.address.flatNumber", "")}
          </h4>
          <h4>
            <span className="color-grey">{t("orders.order_date")} </span>
            {dayjs(get(order, "createdAt", "")).format("DD-MM-YYYY | HH:mm")}
          </h4>
        </div>
      </OrderBox>

      <OrderDetail show={showOrder} setShow={setShowOrder} order={order} />
    </>
  );
};

export default Order;
