import Icons from "@/assets/svgs";
import { CommonButton, CommonModal, OTPInput, PhoneInput } from "@/components";
import useGlobalContext from "@/context/useGlobal";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Trans, useTranslation } from "react-i18next";
import { useTimer } from "react-timer-hook";
import {
  ILogin_body,
  IRegister_body,
  IVerify_body,
} from "../context/addModal.types";
import { StyledAuthModal } from "./authModal.styles";

const AuthModal = () => {
  const [resend, setResend] = useState(false);

  const { t } = useTranslation();

  const {
    state: { auth },
    actions: { setAuth },
  } = useGlobalContext();

  const [code, setCode] = useState("");
  const isVerifying = "SUCCESS";
  const { control, handleSubmit, watch, setError } = useForm<
    IRegister_body & ILogin_body & IVerify_body
  >();
  const expiryTimestamp = new Date();
  expiryTimestamp.setMinutes(expiryTimestamp.getMinutes() + 1);

  const { seconds, /*start */ restart } = useTimer({
    expiryTimestamp,
    autoStart: false,
    onExpire: () => {
      setResend(true);
    },
  });

  const onSubmit = handleSubmit((formData) => {
    console.log(formData);
    // isVerifying
    //   ? verify({
    //       code: String(code),
    //       otpId: loginData,
    //     })
    //   : login(formData);
  });

  useEffect(() => {
    // @ts-ignore
    if (watch("phoneNumber")?.replaceAll("-", "")?.length >= 13) {
      setError("phoneNumber", {});
    }
  }, [watch("phoneNumber")]);

  console.log(auth, "salom");

  return (
    <CommonModal open={auth} setOpen={setAuth} canClose={false}>
      <StyledAuthModal>
        <div className="header">
          <div className="d-flex align-items-center gap-2">
            <Icons.registerIcon />
            {/* <Icons.loginIcon /> */}
            <span>{t(`modal.register`)}</span>
          </div>
          <IconButton onClick={() => setAuth(false)}>
            <Icons.closeIcon />
          </IconButton>
        </div>
        <p className="my-4">
          {!isVerifying ? (
            <span>
              {watch("phoneNumber") || ""} {t("modals.sent_to_this")}
              <p
                className="change-number"
                onClick={() => {
                  restart(expiryTimestamp, false);
                }}
              >
                {t("general.change")}
              </p>
            </span>
          ) : (
            <p className="text-center font-700 color-black">
              {t("modal.enter_phone")}
            </p>
          )}
        </p>
        <form onSubmit={onSubmit}>
          {!isVerifying ? (
            <>
              <div className="otp-container">
                <OTPInput otp={code} setOtp={setCode} />
              </div>
              <div className="flex-center">
                <a
                  className={resend ? "" : "resend-inactive"}
                  // onClick={resend ? handleReSend : undefined}
                >
                  {t("modals.re_send")}
                </a>
              </div>
            </>
          ) : (
            <PhoneInput control={control} name="phoneNumber" autofocus={true} />
          )}

          <CommonButton
            title={t("common.continue")}
            className="blue mt-4"
            sx={{
              width: "100%",
              height: "48px !important",
            }}
          />
        </form>

        {!isVerifying ? (
          <p className="text-center">00:{seconds}</p>
        ) : (
          <span className="term_bottom">
            <Trans
              i18nKey="modal.term"
              components={[
                <a href={"/website-conditions"} target="_blank"></a>,
              ]}
            />
          </span>
        )}
      </StyledAuthModal>
    </CommonModal>
  );
};

export default AuthModal;
