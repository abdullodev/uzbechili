import { Box, Grid } from "@mui/material";
import {
  ArriveBox,
  ArrivedView,
  ContactView,
  PaymentView,
  PurchaseStyle,
} from "./Purchase.style";
import Icons from "@/assets/svgs";
import {
  CommonButton,
  CommonCheckbox,
  CommonSwitch,
  FromSelect,
  PhoneInput,
  TextInput,
} from "@/components";
import { useForm } from "react-hook-form";

//img

import ArriveCarImg from "../../../assets/arriveCar.png";
import UzpostCarImg from "../../../assets/uzPost.png";
import KelishImg from "../../../assets/kelish.png";

const Purchase = () => {
  const { control, watch } = useForm();
  return (
    <PurchaseStyle>
      <Box display={"flex"} justifyContent={"space-between"} mb={2}>
        <h1 className="color-white">Buyurtmani rasmiylashtirish</h1>
      </Box>

      <Grid container spacing={2}>
        <Grid item container xs={12} md={7} spacing={2} width={"100%"}>
          <Grid item xs={12} md={12}>
            <ContactView>
              <div className="header_box">
                <div className="d-flex align-items-center gap-2">
                  <span className="iconBox">
                    <Icons.userIcon />
                  </span>
                  <span>Bog'lanish uchun ma'lumotlar</span>
                </div>
              </div>
              <Grid container spacing={2} pt={2}>
                <Grid item md={6} xs={12}>
                  <TextInput
                    control={control}
                    name="name"
                    label={"Qabul qiluvchi shaxs"}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <PhoneInput
                    control={control}
                    name="phoneNumber"
                    label={"Telefon raqam"}
                  />
                </Grid>
              </Grid>
            </ContactView>
          </Grid>
          <Grid item xs={12} md={12}>
            <ArrivedView>
              <div className="header_box">
                <div className="d-flex align-items-center gap-2">
                  <span className="iconBox">
                    <Icons.locationIcon />
                  </span>
                  <span>Yetkazib berish manzili</span>
                </div>
              </div>

              <Grid container spacing={2} pt={2}>
                <Grid item xs={12} md={6}>
                  <ArriveBox>
                    <div>
                      <p className="grey">Toshkent shaxrida yetkazish</p>
                      <span>30 000 UZS</span>
                    </div>
                    <img src={ArriveCarImg} alt="img" height={40} />
                  </ArriveBox>
                </Grid>
                <Grid item xs={12} md={6}>
                  <ArriveBox paddingRight={1}>
                    <div>
                      <p className="grey">Viloyatlar aro yetkazish</p>
                      <span>UZPOST orqali</span>
                    </div>
                    <img src={UzpostCarImg} alt="img" height={40} />
                  </ArriveBox>
                </Grid>
                <Grid item xs={12} md={12}>
                  <ArriveBox className="designed">
                    <div className="d-flex align-items-center gap-2">
                      <Icons.arriveTime />
                      <p>Yetkazib berish vaqti 3 ish kuni</p>
                    </div>
                    <img src={KelishImg} alt="img" height={35} />
                  </ArriveBox>
                </Grid>

                <Grid item xs={12} md={6}>
                  <FromSelect control={control} name="city" label={"Viloyat"} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FromSelect control={control} name="region" label={"Tuman"} />
                </Grid>
                <Grid item xs={12} md={8}>
                  <TextInput
                    control={control}
                    name="address"
                    label={"Manzil"}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextInput
                    control={control}
                    name="postalCode"
                    label={"Pochta raqami"}
                    placeholder={"XXXXXX"}
                    rules={{
                      required: false,
                      maxLength: 6,
                    }}
                  />
                </Grid>
                <Grid item xs={6} md={3}>
                  <TextInput
                    control={control}
                    name="homeNumber"
                    label={"Uy raqami"}
                    rules={{
                      required: false,
                    }}
                  />
                </Grid>
                <Grid item xs={6} md={3}>
                  <TextInput
                    control={control}
                    name="enterance"
                    label={"Kirish"}
                    rules={{
                      required: false,
                    }}
                  />
                </Grid>
                <Grid item xs={6} md={3}>
                  <TextInput
                    control={control}
                    name="flour"
                    label={"Qavat"}
                    rules={{
                      required: false,
                    }}
                  />
                </Grid>
                <Grid item xs={6} md={3}>
                  <TextInput
                    control={control}
                    name="apartmentNumber"
                    label={"Kvartira raqami"}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <TextInput
                    control={control}
                    name="target"
                    label={"Mo'ljal"}
                    placeholder={
                      "Masalan: bino, ta'lim muassasi yoki joy nomini kiriting"
                    }
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <CommonCheckbox
                    control={control}
                    name="saveForFuture"
                    label={
                      "Kelajakda foydalanish uchun ushbu ma'lumotni saqlash"
                    }
                  />
                </Grid>
              </Grid>
            </ArrivedView>
          </Grid>
        </Grid>
        <Grid item xs={12} md={5}>
          <PaymentView>
            <div className="header_box">
              <div className="d-flex align-items-center gap-2">
                <span className="iconBox">
                  <Icons.priceIcon />
                </span>
                <span>To'lov turi</span>
              </div>
            </div>

            <div className="d-flex justify-content-between gap-2 py-3 border-bottom-dashed">
              <div className="d-flex align-items-center gap-2 ">
                <span className="iconBox">
                  <Icons.cashIcon />
                </span>
                <span>Naqd</span>
              </div>
              <CommonButton
                title="O'zgartirish"
                sx={{ height: "36px !important" }}
              />
            </div>

            <div className="py-3 border-bottom-dashed">
              <div className="d-flex justify-content-between gap-2">
                <div className="d-flex align-items-center gap-2 ">
                  <span>Promokod</span>
                </div>
                <div>
                  <CommonSwitch control={control} name="havePromocode" />
                </div>
              </div>
              {watch("havePromocode") && (
                <TextInput
                  control={control}
                  name="promocode"
                  label={"Promocode"}
                />
              )}
            </div>

            <div className="d-flex justify-content-between gap-2 py-2">
              <div className="d-flex align-items-center gap-2 ">
                <span>Umumiy narxi:</span>
              </div>
              <h4>300 000 uzs</h4>
            </div>

            <div className="d-flex justify-content-between gap-2 py-2">
              <div className="d-flex align-items-center gap-2 ">
                <span>Yetkazish narxi:</span>
              </div>
              <h4>0 uzs</h4>
            </div>

            <div className="py-2">
              <CommonButton
                title="Buyurtma berish"
                className="blue"
                sx={{
                  width: "100%",
                  height: "48px !important",
                  fontSize: "16px !important",
                }}
              />
            </div>

            <div className="pt-2">
              <CommonCheckbox
                control={control}
                name="agree"
                label={
                  "Yetkazib berish haqidagi barcha shartlar bilan tanishib chiqdim va rozilik beraman"
                }
              />
            </div>
          </PaymentView>
        </Grid>
      </Grid>
    </PurchaseStyle>
  );
};

export default Purchase;
