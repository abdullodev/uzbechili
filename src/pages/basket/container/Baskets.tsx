import { useMemo, useState } from "react";
import { Box, Grid, IconButton, Stack, Tooltip } from "@mui/material";
import {
  AmountCalcBox,
  BasketBoxes,
  BasketStyle,
  CardView,
  DefaultBasket,
  PaymentBox,
} from "./Basket.style";
import { CommonButton, CommonModal } from "@/components";
import Icons from "@/assets/svgs";
import { DeleteStyle, RealyWant } from "@/styles/Common.style";
import { useNavigate } from "react-router-dom";
import useGlobalContext from "@/context/useGlobal";
import { ICart } from "@/types/types.common";
import { numberFormat } from "@/utils/numberFormat";

const Baskets = () => {
  const [realyDelete, setRealyDelete] = useState<boolean>(false);

  const navigate = useNavigate();
  const {
    state: { baskets },
    actions: { addToCart, removeCart, deleteCart, deleteAll },
  } = useGlobalContext();
  const totalSum = useMemo(() => {
    return baskets.reduce((acc, curr) => acc + curr.price! * curr.count, 0);
  }, [baskets]);

  return (
    <BasketStyle>
      <Box display={"flex"} justifyContent={"space-between"} mb={2}>
        <h1 className="color-white">Savat</h1>
      </Box>

      {!!baskets.length ? (
        <Grid container spacing={"24px"}>
          <Grid item md={7} xs={12}>
            <BasketBoxes>
              <div className="d-flex justify-content-between basket_header">
                <h3 className="color-black">Buyurtmangiz</h3>
                <CommonButton
                  startIcon={<Icons.deleteIcon />}
                  title="Savatni tozalash"
                  className="delete_all"
                  onClick={() => setRealyDelete(true)}
                />
              </div>
              <div className="mt-2 d-flex flex-column gap-2">
                {baskets.map((item: ICart) => (
                  <CardView>
                    <Grid
                      container
                      spacing={2}
                      width={"100%"}
                      order={{ xs: 1, md: 1 }}
                    >
                      <Grid item xl={2} md={3} xs={4}>
                        <div className="image_box">
                          <img
                            src={import.meta.env.VITE_BASE_URL + item.image}
                            alt={item.image}
                          />
                        </div>
                      </Grid>
                      <Grid item xl={8} md={6} xs={12} order={{ xs: 3, md: 2 }}>
                        <Tooltip
                          title={
                            <p className="title">
                              {item.name} (Color: <code>{item.color}</code>,
                              Size: <code>{item.size}</code>)
                            </p>
                          }
                          placement="top-start"
                        >
                          <p className="title">
                            {item.name} (Color: <code>{item.color}</code>, Size:{" "}
                            <code>{item.size}</code>)
                          </p>
                        </Tooltip>
                        <p className="grey size-14">
                          {numberFormat(item.price)} uzs
                        </p>

                        <Stack
                          direction={"row"}
                          spacing={2}
                          alignItems={"center"}
                        >
                          <AmountCalcBox>
                            <IconButton
                              className="buttonAmount"
                              onClick={() => {
                                removeCart({
                                  productId: item.productId,
                                  color: item.color,
                                  size: item.size,
                                  count: item.count,
                                });
                              }}
                              disabled={item.count === 1}
                            >
                              <Icons.MinusIcon />
                            </IconButton>
                            <span className="amount">{item.count}</span>
                            <IconButton
                              className="buttonAmount"
                              onClick={() => {
                                addToCart(
                                  {
                                    productId: item.productId,
                                    color: item.color,
                                    size: item.size,
                                    count: item.count,
                                  },
                                  false
                                );
                              }}
                            >
                              <Icons.PlusIcon />
                            </IconButton>
                          </AmountCalcBox>
                          <p>{numberFormat(item.price! * item.count)} uzs</p>
                        </Stack>
                      </Grid>
                      <Grid item xl={2} md={3} xs={8} order={{ xs: 2, md: 3 }}>
                        <div className="d-flex justify-content-end">
                          <DeleteStyle
                            onClick={() => {
                              deleteCart({
                                productId: item.productId,
                                color: item.color,
                                size: item.size,
                                count: item.count,
                              });
                            }}
                          >
                            <Icons.deleteIcon />
                          </DeleteStyle>
                        </div>
                      </Grid>
                    </Grid>
                  </CardView>
                ))}
              </div>
            </BasketBoxes>
          </Grid>
          <Grid item md={5} xs={12}>
            <PaymentBox>
              <div className="d-flex justify-content-between payment_header">
                <h3 className="color-black">To'lovga</h3>
              </div>

              <Stack direction={"column"} spacing={3}>
                <div className="d-flex justify-content-between pt-3">
                  <h3>Umumiy narxi:</h3>
                  <b className="color-black">{numberFormat(totalSum)} uzs</b>
                </div>

                <CommonButton
                  title="Buyurtmani rasmiylashtirish"
                  className="blue"
                  sx={{ width: "100%", height: "48px !important" }}
                  onClick={() => navigate("/purchase")}
                />
              </Stack>
            </PaymentBox>
          </Grid>
        </Grid>
      ) : (
        <Grid container>
          <Grid item md={12} xs={12}>
            <DefaultBasket>
              <Icons.defaultBasket />
              <div>
                <p className="color-grey">Savat hozircha bo'sh.</p>
                <p className="color-grey text-center"> Unaqamasde{")"}</p>
              </div>
            </DefaultBasket>
          </Grid>
        </Grid>
      )}

      <CommonModal open={realyDelete}>
        <RealyWant>
          <span className="delete_icon">
            <Icons.deleteIcon />
          </span>
          <h4>Rostdan ham savatni tozalamoqchimisiz?</h4>

          <div className="d-flex gap-2">
            <CommonButton
              title="Yo'q"
              className="no"
              onClick={() => setRealyDelete(false)}
            />
            <CommonButton
              title="Ha"
              className="yes"
              onClick={() => {
                deleteAll();
                setRealyDelete(false);
              }}
            />
          </div>
        </RealyWant>
      </CommonModal>
    </BasketStyle>
  );
};

export default Baskets;
