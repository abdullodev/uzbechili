import { Box, Grid, IconButton, Stack, Tooltip } from "@mui/material";
import {
  AmountCalcBox,
  BasketBoxes,
  BasketStyle,
  CardView,
  DefaultBasket,
  PaymentBox,
} from "./Basket.style";
import { CommonButton } from "@/components";
import Icons from "@/assets/svgs";
import { DeleteStyle } from "@/styles/Common.style";
import { useNavigate } from "react-router-dom";

const Baskets = () => {
  const navigate = useNavigate();

  return (
    <BasketStyle>
      <Box display={"flex"} justifyContent={"space-between"} mb={2}>
        <h1 className="color-white">Savat</h1>
      </Box>

      <Grid container spacing={"24px"}>
        <Grid item md={7} xs={12}>
          <BasketBoxes>
            <div className="d-flex justify-content-between basket_header">
              <h3 className="color-black">Buyurtmangiz</h3>
              <CommonButton
                startIcon={<Icons.deleteIcon />}
                title="Savatni tozalash"
                className="delete_all"
              />
            </div>
            <Stack direction={"column"} spacing={2} mt={3}>
              <CardView>
                <Stack direction={"row"} spacing={2}>
                  <Stack width={"12%"}>
                    <div className="image_box">
                      <img
                        src="https://sportcourt.ru/content/models/large/84988_959670.jpg"
                        alt="image"
                      />
                    </div>
                  </Stack>
                  <Stack direction={"column"} spacing={0.5} width={"70%"}>
                    <Tooltip
                      title="Толстовка короткая длина (Color: Grey, Size: L)"
                      placement="top-start"
                    >
                      <p className="title">
                        Толстовка короткая длина (Color: Grey, Size: L)
                      </p>
                    </Tooltip>
                    <p className="grey size-14">150 000 uzs</p>

                    <Stack direction={"row"} spacing={2} alignItems={"center"}>
                      <AmountCalcBox>
                        <IconButton className="buttonAmount">
                          <Icons.MinusIcon />
                        </IconButton>
                        <span className="amount">1</span>
                        <IconButton className="buttonAmount">
                          <Icons.PlusIcon />
                        </IconButton>
                      </AmountCalcBox>
                      <p>150 000 uzs</p>
                    </Stack>
                  </Stack>
                  <Stack
                    alignSelf={"center"}
                    width={"12%"}
                    alignItems={"flex-end"}
                  >
                    <DeleteStyle>
                      <Icons.deleteIcon />
                    </DeleteStyle>
                  </Stack>
                </Stack>
              </CardView>

              <CardView>
                <Stack direction={"row"} spacing={2}>
                  <Stack width={"12%"}>
                    <div className="image_box">
                      <img
                        src="https://sportcourt.ru/content/models/large/84988_959670.jpg"
                        alt="image"
                      />
                    </div>
                  </Stack>
                  <Stack direction={"column"} spacing={0.5} width={"70%"}>
                    <Tooltip
                      title="Толстовка короткая длина (Color: Grey, Size: L)"
                      placement="top-start"
                    >
                      <p className="title">
                        Толстовка короткая длина (Color: Grey, Size: L)
                      </p>
                    </Tooltip>
                    <p className="grey size-14">150 000 uzs</p>

                    <Stack direction={"row"} spacing={2} alignItems={"center"}>
                      <AmountCalcBox>
                        <IconButton className="buttonAmount">
                          <Icons.MinusIcon />
                        </IconButton>
                        <span className="amount">1</span>
                        <IconButton className="buttonAmount">
                          <Icons.PlusIcon />
                        </IconButton>
                      </AmountCalcBox>
                      <p>150 000 uzs</p>
                    </Stack>
                  </Stack>
                  <Stack
                    alignSelf={"center"}
                    width={"12%"}
                    alignItems={"flex-end"}
                  >
                    <DeleteStyle>
                      <Icons.deleteIcon />
                    </DeleteStyle>
                  </Stack>
                </Stack>
              </CardView>
            </Stack>
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
                <b className="color-black">300 000 uzs</b>
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

      {"" && (
        <Grid container>
          <Grid item md={12}>
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
    </BasketStyle>
  );
};

export default Baskets;
