import { Box, Grid } from "@mui/material";
import { OrderBox, OrderStyle } from "./Order.style";
import { useApi } from "@/hooks/useApi/useApiHooks";
import { get } from "lodash";

const OrderHistory = () => {
  const userId = JSON.parse(localStorage.getItem("auth") || "{}")?._id;
  const { data } = useApi(`order/${userId}`, {}, { enabled: !!userId });
  const state =
    get(data, "data.state", "") === "new"
      ? 1
      : get(data, "data.state", "") === "inProgress"
      ? 2
      : 3;

  return (
    <OrderStyle>
      <Box display={"flex"} justifyContent={"space-between"} mb={2}>
        <h1 className="color-white">Aktiv buyurtmalar</h1>
      </Box>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <OrderBox>
            <div className="state_box">
              <div className="d-flex direction-column gap-1">
                <span
                  className={state > 0 ? "state_title active" : "state_title"}
                >
                  Yaratildi
                </span>
                <span
                  className={state > 0 ? "state_line active" : "state_line"}
                ></span>
              </div>
              <div className="d-flex direction-column gap-1">
                <span
                  className={state > 1 ? "state_title active" : "state_title"}
                >
                  Jarayonda
                </span>
                <span
                  className={state > 1 ? "state_line active" : "state_line"}
                ></span>
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
                <span className="color-grey">Manzil:</span> массив Сергели-III,
                3
              </h4>
              <h4>
                <span className="color-grey">Buyurtma sanasi:</span>
                18.12.2023
              </h4>
            </div>
          </OrderBox>
        </Grid>
      </Grid>
    </OrderStyle>
  );
};

export default OrderHistory;
