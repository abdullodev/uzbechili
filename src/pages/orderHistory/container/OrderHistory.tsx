import { useApi } from "@/hooks/useApi/useApiHooks";
import { Box, Grid } from "@mui/material";
import { get } from "lodash";
import Order from "../components/Order";
import { OrderStyle } from "./Order.style";

const OrderHistory = () => {
  const userId = JSON.parse(localStorage.getItem("auth") || "{}")?._id;
  const { data } = useApi(`order/${userId}`, {}, { enabled: !!userId });

  return (
    <OrderStyle>
      <Box display={"flex"} justifyContent={"space-between"} mb={2}>
        <h1 className="color-white">Aktiv buyurtmalar</h1>
      </Box>
      <Grid container spacing={2}>
        {get(data, "data", []).map((order: Record<string, any>) => (
          <Grid item md={6} xs={12}>
            <Order order={order} />
          </Grid>
        ))}
      </Grid>
    </OrderStyle>
  );
};

export default OrderHistory;
