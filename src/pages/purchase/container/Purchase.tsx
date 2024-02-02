import { useEffect, useMemo, useState } from "react";
import { Box, Grid, Tooltip } from "@mui/material";
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
  CommonModal,
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
import useGlobalContext from "@/context/useGlobal";
import { get } from "lodash";
import { numberFormat } from "@/utils/numberFormat";
import { useApiMutation } from "@/hooks/useApi/useApiHooks";
import { ICart } from "@/types/types.common";
import { useNavigate } from "react-router-dom";
import { SuccesOrder } from "@/styles/Common.style";
import PromocodeForm from "../components/PromocodeForm";

const REGIONS = [
  {
    _id: "chilanzar",
    name: "Chilonzor",
  },
  {
    _id: "yunusobod",
    name: "Yunusobod",
  },
];

const Purchase = () => {
  const [givenOrder, setGivenOrder] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [promocodeData, setPromocodeData] = useState<any>();

  const navigate = useNavigate();

  const {
    state: { siteSettings, baskets, promocode },
    actions: { deleteAll },
  } = useGlobalContext();
  const { control, watch, handleSubmit, setValue, reset } = useForm();
  const user = JSON.parse(localStorage.getItem("auth") || "{}");

  const totalSum = useMemo(() => {
    return baskets.reduce((acc, curr) => acc + curr.price! * curr.count, 0);
  }, [baskets]);

  const { mutate, status } = useApiMutation("order", "post", {
    onSuccess() {
      deleteAll();
      reset();
      setGivenOrder(true);
    },
  });

  const onSubmit = (data: Record<string, any>) => {
    const requestData = {
      receiverName: data.receiverName,
      receiverPhoneNumber: data.receiverPhoneNumber,
      clientId: user._id,
      itemsCount: baskets.length,
      totalPrice: totalSum,
      paymentMethod: "cash",
      totalCalculatedPrice:
        totalSum + get(siteSettings, "data.deliveryPrice", 0),
      orderItems: baskets.map((item: ICart) => ({
        productId: item.productId,
        count: item.count,
        price: item.price,
        size: item.size,
        color: item.color,
      })),
      promoCodeId: watch("havePromocode")
        ? get(promocode, "data._id", "")
        : null,
      totalPriceWithPromoCode: watch("havePromocode")
        ? totalSum +
          get(siteSettings, "data.deliveryPrice", 0) -
          get(promocode, "data.amount", 0)
        : totalSum + get(siteSettings, "data.deliveryPrice", 0),
      deliveryPrice: get(siteSettings, "data.deliveryPrice", 0),
      address: {
        furtherUse: data.furtherUse,
        region: data.region,
        district: data.district,
        address: data.district,
        postIndex: data.postIndex,
        homeNumber: data.homeNumber,
        entrance: data.entrance,
        floor: data.floor,
        flatNumber: data.flatNumber,
        about: data.about,
      },
    };

    mutate(requestData);
  };

  useEffect(() => {
    setValue("receiverPhoneNumber", user?.phoneNumber);
  }, []);

  useEffect(() => {
    if (promocodeData) {
      setValue("promocode", promocodeData?.name);
    }
  }, [promocodeData]);

  return (
    <PurchaseStyle>
      <Box display={"flex"} justifyContent={"space-between"} mb={2}>
        <h1 className="color-white">Buyurtmani rasmiylashtirish</h1>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)} id="create_order-form">
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
                      name="receiverName"
                      label={"Qabul qiluvchi shaxs"}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <PhoneInput
                      control={control}
                      name="receiverPhoneNumber"
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
                        <span>
                          {numberFormat(
                            get(siteSettings, "data.deliveryPrice", 0)
                          )}{" "}
                          UZS
                        </span>
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
                        <p>
                          Yetkazib berish vaqti{" "}
                          {get(siteSettings, "data.deliveryDays", 1)} ish kuni
                        </p>
                      </div>
                      <img src={KelishImg} alt="img" height={35} />
                    </ArriveBox>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <FromSelect
                      control={control}
                      name="region"
                      label={"Viloyat"}
                      options={[
                        {
                          _id: "toshkent",
                          name: "Toshkent shahar",
                        },
                      ]}
                      defaultValue={"toshkent"}
                      disabled
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FromSelect
                      control={control}
                      name="district"
                      label={"Tuman"}
                      options={REGIONS}
                    />
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
                      name="postIndex"
                      label={"Pochta raqami"}
                      placeholder={"XXXXXX"}
                      rules={{
                        required: false,
                        maxLength: { value: 6, message: "Noto'gri kiritildi" },
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
                      name="entrance"
                      label={"Kirish"}
                      rules={{
                        required: false,
                      }}
                    />
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <TextInput
                      control={control}
                      name="floor"
                      label={"Qavat"}
                      rules={{
                        required: false,
                      }}
                    />
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <TextInput
                      control={control}
                      name="flatNumber"
                      label={"Kvartira raqami"}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextInput
                      control={control}
                      name="about"
                      label={"Mo'ljal"}
                      placeholder={
                        "Masalan: bino, ta'lim muassasi yoki joy nomini kiriting"
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <CommonCheckbox
                      control={control}
                      name="furtherUse"
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
                  <span className="d-flex align-items-center">
                    <Icons.cashIcon />
                  </span>
                  <span className="d-flex align-items-center">Naqd</span>
                </div>
                <Tooltip title="Hozircha faqat naqd" arrow placement="top">
                  <div>
                    <CommonButton
                      title="O'zgartirish"
                      sx={{ height: "36px !important" }}
                      disabled
                      type="button"
                    />
                  </div>
                </Tooltip>
              </div>

              <div className="py-3 border-bottom-dashed">
                <div className="d-flex justify-content-between gap-2">
                  <div className="d-flex align-items-center gap-2 ">
                    <span>Promokod</span>
                  </div>
                  <div>
                    <CommonButton
                      title="Promocode"
                      sx={{ height: "36px !important" }}
                      type="button"
                      onClick={() => setOpen(true)}
                    />
                  </div>
                </div>
                {!!promocodeData && (
                  <TextInput
                    control={control}
                    name="promocode"
                    label={"Promocode"}
                    disabled
                  />
                )}
              </div>

              <div className="d-flex justify-content-between gap-2 py-2">
                <div className="d-flex align-items-center gap-2 ">
                  <span>Yetkazish narxi:</span>
                </div>
                <h4>
                  {numberFormat(get(siteSettings, "data.deliveryPrice", 0))} uzs
                </h4>
              </div>
              <div className="d-flex justify-content-between gap-2 py-2">
                <div className="d-flex align-items-center gap-2 ">
                  <span>Umumiy narxi:</span>
                </div>
                <h4 className="d-flex flex-column">
                  {!!promocodeData && (
                    <del className="discount_price">
                      {numberFormat(
                        totalSum + get(siteSettings, "data.deliveryPrice", 0)
                      )}{" "}
                      uzs
                    </del>
                  )}
                  {numberFormat(
                    totalSum +
                      get(siteSettings, "data.deliveryPrice", 0) -
                      (watch("havePromocode") &&
                        get(promocode, "data.amount", 0))
                  )}{" "}
                  uzs
                </h4>
              </div>

              <div className="py-2">
                <CommonButton
                  title="Buyurtma berish"
                  form="create_order-form"
                  className="blue"
                  sx={{
                    width: "100%",
                    height: "48px !important",
                    fontSize: "16px !important",
                  }}
                  type="submit"
                  disabled={!watch("agree") || status === "loading"}
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
      </form>

      <CommonModal open={givenOrder}>
        <SuccesOrder>
          <span className="done_icon">
            <Icons.doneIcon />
          </span>
          <h4>Buyurtma qabul qilindi!</h4>

          <div className="d-flex gap-2">
            <CommonButton
              title="Yaxshi"
              className="yes"
              onClick={() => {
                setGivenOrder(false);
                navigate("/");
              }}
            />
          </div>
        </SuccesOrder>
      </CommonModal>

      <PromocodeForm
        open={open}
        setOpen={setOpen}
        setPromocodeData={setPromocodeData}
      />
    </PurchaseStyle>
  );
};

export default Purchase;
