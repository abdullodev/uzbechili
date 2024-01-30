import { get } from "lodash";
import { OrderBox } from "../container/Order.style";

const Order = ({ order }: { order: Record<string, any> }) => {
  const state =
    get(order, "state", "") === "new"
      ? 1
      : get(order, "state", "") === "inProgress"
      ? 2
      : get(order, "state", "") === "completed"
      ? 3
      : 0;

  return (
    <OrderBox>
      <div className="state_box">
        {order.state === "cancelled" && (
          <div className={`d-flex direction-column gap-1 cancelled`}>
            <span className={"state_title"}>Bekor qilindi</span>
            <span className={"state_line"}></span>
          </div>
        )}
        {order.state !== "cancelled" && (
          <div className={`d-flex direction-column gap-1 ${state && "active"}`}>
            <span className={"state_title"}>Yaratildi</span>
            <span className={"state_line"}></span>
          </div>
        )}
        <div
          className={`d-flex direction-column gap-1 ${state > 1 && "active"}`}
        >
          <span className={"state_title"}>Jarayonda</span>
          <span className={"state_line"}></span>
        </div>
      </div>

      <div className="d-flex justify-content-between border-bottom-dashed py-3">
        <h3>
          Buyurtma <span className="color-main">№123456</span>
        </h3>
        <h3>
          150 000 <span className="color-grey">uzs</span>
        </h3>
      </div>

      <div className="pt-3">
        <h4>
          <span className="color-grey">Manzil:</span> массив Сергели-III, 3
        </h4>
        <h4>
          <span className="color-grey">Buyurtma sanasi:</span>
          18.12.2023
        </h4>
      </div>
    </OrderBox>
  );
};

export default Order;
