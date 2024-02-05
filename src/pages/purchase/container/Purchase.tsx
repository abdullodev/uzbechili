import Icons from "@/assets/svgs";
import {
  CommonButton,
  CommonCheckbox,
  CommonModal,
  FromSelect,
  PhoneInput,
  TextInput,
} from "@/components";
import { Box, Grid, Tooltip } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import {
  ArriveBox,
  ArrivedView,
  ContactView,
  PaymentView,
  PurchaseStyle,
} from "./Purchase.style";

//img

import useGlobalContext from "@/context/useGlobal";
import { useApi, useApiMutation } from "@/hooks/useApi/useApiHooks";
import { SuccesOrder } from "@/styles/Common.style";
import { ICart } from "@/types/types.common";
import { numberFormat } from "@/utils/numberFormat";
import { get } from "lodash";
import { useNavigate } from "react-router-dom";
import ArriveCarImg from "../../../assets/arriveCar.png";
import KelishImg from "../../../assets/kelish.png";
import UzpostCarImg from "../../../assets/uzPost.png";
import PromocodeForm from "../components/PromocodeForm";
import { REGIONS } from "./purchase.const";
import { useTranslation } from "react-i18next";

const Purchase = () => {
  const [givenOrder, setGivenOrder] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [promocodeData, setPromocodeData] = useState<any>();

  const navigate = useNavigate();
  const { t } = useTranslation();

  const {
    state: { siteSettings, baskets },
    actions: { deleteAll },
  } = useGlobalContext();
  const { control, watch, handleSubmit, setValue, reset } = useForm();
  const user = JSON.parse(localStorage.getItem("auth") || "{}");

  const { data } = useApi(`order/${user?._id}`, {}, { enabled: !!user?._id });

  const isHavePromocode = get(data, "data", []).find(
    (order: Record<string, any>) => order.state === "completed"
  );

  const totalSum = useMemo(() => {
    return baskets.reduce((acc, curr) => acc + curr.price! * curr.count, 0);
  }, [baskets]);

  const { mutate, status } = useApiMutation("order", "post", {
    onSuccess() {
      deleteAll();
      reset({});
      setGivenOrder(true);
      setPromocodeData(undefined);
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
      promoCodeId: !!promocodeData ? promocodeData._id : null,
      totalPriceWithPromoCode:
        !!promocodeData && promocodeData?.currency === "uzs"
          ? totalSum +
            get(siteSettings, "data.deliveryPrice", 0) -
            promocodeData?.amount
          : promocodeData?.currency === "percent"
          ? Math.ceil(
              (totalSum +
                get(siteSettings, "data.deliveryPrice", 0) -
                (totalSum + get(siteSettings, "data.deliveryPrice", 0)) *
                  promocodeData.amount) /
                100
            )
          : isHavePromocode
          ? Math.ceil(
              totalSum +
                get(siteSettings, "data.deliveryPrice", 0) -
                ((totalSum + get(siteSettings, "data.deliveryPrice", 0)) * 10) /
                  100
            )
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
        <h1 className="color-white">{t("purchase.title")}</h1>
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
                    <span>{t("purchase.user_info")}</span>
                  </div>
                </div>
                <Grid container spacing={2} pt={2}>
                  <Grid item md={6} xs={12}>
                    <TextInput
                      control={control}
                      name="receiverName"
                      label={t("purchase.recieverName")}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <PhoneInput
                      control={control}
                      name="receiverPhoneNumber"
                      label={t("purchase.phoneNumber")}
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
                    <span>{t("purchase.address_info")}</span>
                  </div>
                </div>

                <Grid container spacing={2} pt={2}>
                  <Grid item xs={12} md={6}>
                    <ArriveBox>
                      <div>
                        <p className="grey">{t("purchase.in_tashkent")}</p>
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
                        <p className="grey">{t("purchase.over_region")}</p>
                        <span>{t("purchase.by_uzpost")}</span>
                      </div>
                      <img src={UzpostCarImg} alt="img" height={40} />
                    </ArriveBox>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <ArriveBox className="designed">
                      <div className="d-flex align-items-center gap-2">
                        <Icons.arriveTime />
                        <p>
                          {t("purchase.delivery_day").replace(
                            "{{value}}",
                            `${get(siteSettings, "data.deliveryDays")}`
                          )}
                        </p>
                      </div>
                      <img src={KelishImg} alt="img" height={35} />
                    </ArriveBox>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <FromSelect
                      control={control}
                      name="region"
                      label={t("purchase.region")}
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
                      label={t("purchase.distirict")}
                      options={REGIONS}
                    />
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <TextInput
                      control={control}
                      name="address"
                      label={t("purchase.address")}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextInput
                      control={control}
                      name="postIndex"
                      label={t("purchase.pochta")}
                      placeholder={"XXXXXX"}
                      rules={{
                        required: false,
                        maxLength: {
                          value: 6,
                          message: t("purchase.error_pochta"),
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <TextInput
                      control={control}
                      name="homeNumber"
                      label={t("purchase.house_number")}
                      rules={{
                        required: false,
                      }}
                    />
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <TextInput
                      control={control}
                      name="entrance"
                      label={t("purchase.enterance")}
                      rules={{
                        required: false,
                      }}
                    />
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <TextInput
                      control={control}
                      name="floor"
                      label={t("purchase.floor")}
                      rules={{
                        required: false,
                      }}
                    />
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <TextInput
                      control={control}
                      name="flatNumber"
                      label={t("purchase.apartmentNumber")}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextInput
                      control={control}
                      name="about"
                      label={t("purchase.about_your_place")}
                      placeholder={t("purchase.example")}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <CommonCheckbox
                      control={control}
                      name="furtherUse"
                      label={t("purchase.future_use")}
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
                  <span>{t("purchase.payment_info")}</span>
                </div>
              </div>

              <div className="d-flex justify-content-between gap-2 py-3 border-bottom-dashed">
                <div className="d-flex align-items-center gap-2 ">
                  <span className="d-flex align-items-center">
                    <Icons.cashIcon />
                  </span>
                  <span className="d-flex align-items-center">
                    {t("purchase.cash")}
                  </span>
                </div>
                <Tooltip title="Hozircha faqat naqd" arrow placement="top">
                  <div>
                    <CommonButton
                      title={t("purchase.change")}
                      sx={{ height: "36px !important" }}
                      disabled
                      type="button"
                    />
                  </div>
                </Tooltip>
              </div>

              {!!isHavePromocode && (
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
              )}
              <div className="d-flex justify-content-between gap-2 py-2">
                <div className="d-flex align-items-center gap-2 ">
                  <span>{t("purchase.product_price")}</span>
                </div>
                <h4>{numberFormat(totalSum)} uzs</h4>
              </div>

              <div className="d-flex justify-content-between gap-2 py-2">
                <div className="d-flex align-items-center gap-2 ">
                  <span>{t("purchase.delivery_price")}</span>
                </div>
                <h4>
                  {numberFormat(get(siteSettings, "data.deliveryPrice", 0))} uzs
                </h4>
              </div>
              <div className="d-flex justify-content-between gap-2 py-2">
                <div className="d-flex align-items-center gap-2 ">
                  <span>{t("purchase.total_price")}</span>
                </div>
                <h4
                  className={`d-flex flex-column ${
                    (!isHavePromocode || !!promocodeData) && "text-error"
                  }`}
                >
                  {(!isHavePromocode || !!promocodeData) && (
                    <del className="discount_price">
                      {numberFormat(
                        totalSum + get(siteSettings, "data.deliveryPrice", 0)
                      )}{" "}
                      uzs
                    </del>
                  )}
                  {!!promocodeData &&
                  get(promocodeData, "currency", "") === "uzs"
                    ? numberFormat(
                        totalSum +
                          get(siteSettings, "data.deliveryPrice", 0) -
                          get(promocodeData, "amount", "")
                      )
                    : !!promocodeData &&
                      get(promocodeData, "currency", "") === "percent"
                    ? numberFormat(
                        Math.ceil(
                          totalSum +
                            get(siteSettings, "data.deliveryPrice", 0) -
                            ((totalSum +
                              get(siteSettings, "data.deliveryPrice", 0)) *
                              promocodeData.amount) /
                              100
                        )
                      )
                    : !isHavePromocode
                    ? numberFormat(
                        Math.ceil(
                          totalSum +
                            get(siteSettings, "data.deliveryPrice", 0) -
                            ((totalSum +
                              get(siteSettings, "data.deliveryPrice", 0)) *
                              10) /
                              100
                        )
                      )
                    : numberFormat(
                        totalSum + get(siteSettings, "data.deliveryPrice", 0)
                      )}{" "}
                  uzs
                </h4>
              </div>

              <div className="py-2">
                <CommonButton
                  title={t("purchase.give_order")}
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
                  label={t("purchase.agree")}
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
          <h4>{t("purchase.ordered")}</h4>

          <div className="d-flex gap-2">
            <CommonButton
              title={t("common.good")}
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
