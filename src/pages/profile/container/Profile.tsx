import Icons from "@/assets/svgs";
import { CommonButton, PhoneInput, TextInput } from "@/components";
import { Modal } from "@mui/material";
import { get } from "lodash";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ModalStyle, ProfileStyle } from "./Profile.style";
import { useTranslation } from "react-i18next";
import { useApi, useApiMutation } from "@/hooks/useApi/useApiHooks";
import { toast } from "react-hot-toast";

const Profile = () => {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const { control, setValue, handleSubmit, reset } = useForm();

  const { t } = useTranslation();

  const auth = JSON.parse(localStorage.getItem("auth") || "{}");

  useEffect(() => {
    if (auth) {
      setValue("phoneNumber", get(auth, "phoneNumber", ""));
    }
  }, []);

  const { mutate, status: updateStatus } = useApiMutation("client", "put", {
    onSuccess() {
      toast.success("Success");
      refetch();
    },
  });

  const { data, status, refetch } = useApi(
    `/client/${auth._id}`,
    {},
    { enabled: !!auth?._id }
  );

  const onSubmit = (data: any) => {
    mutate({ ...data, _id: get(auth, "_id", "") });
  };

  const logout = () => {
    localStorage.clear();
    location.pathname = "";
    navigate("/");
  };

  useEffect(() => {
    if (status === "success") {
      reset(data.data);
    }
  }, [status]);

  return (
    <ProfileStyle>
      <div className="user-box">
        <form
          className="d-flex flex-column gap-2 "
          onSubmit={handleSubmit(onSubmit)}
          id="client-update"
        >
          <TextInput
            control={control}
            name="firstName"
            label={t("profile.name")}
          />
          <TextInput
            control={control}
            name="lastName"
            label={t("profile.lastName")}
          />

          <div>
            <PhoneInput
              control={control}
              name="phoneNumber"
              label={t("profile.phone")}
              disabled
            />
          </div>
          <CommonButton
            className="blue"
            title={t("common.save")}
            type="submit"
            form="client-update"
            disabled={updateStatus === "loading"}
            sx={{ height: "48px !important" }}
          />
        </form>
      </div>
      <div className="border"></div>
      <div className="info">
        <span>{t("profile.info")}</span>
      </div>

      <div className="d-flex flex-column gap-2 bottom">
        <Link to={"https://t.me/just_islom"} style={{ width: "290px" }}>
          <CommonButton
            startIcon={<Icons.TgIcon />}
            title={t("profile.by_tg")}
            className="white"
            sx={{ width: "290px !important", height: "48px !important" }}
          />
        </Link>

        <CommonButton
          title={t("profile.logout")}
          className="logout"
          onClick={() => setOpen(true)}
        />
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalStyle>
          <h3>{t("profile.realy_logout")}</h3>
          <div className="d-flex gap-2">
            <CommonButton
              title={t("common.no")}
              className="no"
              onClick={() => setOpen(false)}
            />
            <CommonButton
              title={t("common.yes")}
              className="yes"
              onClick={logout}
            />
          </div>
        </ModalStyle>
      </Modal>
    </ProfileStyle>
  );
};

export default Profile;
