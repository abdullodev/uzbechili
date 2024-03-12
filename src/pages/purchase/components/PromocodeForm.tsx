import { CommonButton, CommonModal, TextInput } from "@/components";
import { Grid, IconButton } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { HeaderBox, MainModalBox } from "../container/Purchase.style";
import Icons from "@/assets/svgs";
import { useApiMutation } from "@/hooks/useApi/useApiHooks";
import { useTranslation } from "react-i18next";

interface IPromocodeForm {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setPromocodeData: any;
}
const PromocodeForm = ({ open, setOpen, setPromocodeData }: IPromocodeForm) => {
  const { control, handleSubmit } = useForm();
  const { t } = useTranslation();

  const { mutate } = useApiMutation("/promo-code", "post", {
    onSuccess(data) {
      setOpen(false);
      setPromocodeData(data?.data);
    },
  });
  const client = JSON.parse(localStorage.getItem("auth") || "{}");

  const onSubmit = (data: any) => {
    const requestData = {
      ...data,
      clientId: client?.user?._id,
    };
    mutate(requestData);
  };
  return (
    <CommonModal open={open}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <MainModalBox>
          <Grid container spacing={3}>
            <Grid item md={12} xs={12}>
              <HeaderBox>
                <h2>Promocode</h2>
                <IconButton className="close" onClick={() => setOpen(false)}>
                  <Icons.closeIcon />
                </IconButton>
              </HeaderBox>
            </Grid>
            <Grid item md={12} xs={12}>
              <TextInput
                control={control}
                name="text"
                label={"Promocode"}
                placeholder={"Promocodeni kiriting"}
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <CommonButton
                type="submit"
                className="blue"
                title={t("common.save")}
                sx={{ width: "100%", height: "48px !important" }}
              />
            </Grid>
          </Grid>
        </MainModalBox>
      </form>
    </CommonModal>
  );
};

export default PromocodeForm;
