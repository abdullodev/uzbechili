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
import useAuthModalContext from "../context/autoModal.context";

const AuthModal = () => {
  const [resend, setResend] = useState(false);

  const { t } = useTranslation();

  const {
    state: { auth },
    actions: { setAuth },
  } = useGlobalContext();

  const {
    state: {
      loginState: { loginData, loginStatus },
      verifyState: { verifyData, verifyStatus },
    },
    actions: { login, verify },
  } = useAuthModalContext();

  const [code, setCode] = useState("");
  const isVerifying = loginStatus === "SUCCESS";
  const { control, handleSubmit, watch, setError } = useForm<
    IRegister_body & ILogin_body & IVerify_body
  >();
  const expiryTimestamp = new Date();
  expiryTimestamp.setMinutes(expiryTimestamp.getMinutes() + 1);

  const { seconds, start, restart } = useTimer({
    expiryTimestamp,
    autoStart: false,
    onExpire: () => {
      setResend(true);
    },
  });

  const onSubmit = handleSubmit((formData) => {
    isVerifying
      ? verify({
          otp: String(code),
          _id: loginData,
        })
      : login(formData);
  });

  useEffect(() => {
    if (loginStatus === "SUCCESS") {
      start();
    }
  }, [loginStatus]);

  useEffect(() => {
    if (verifyStatus === "SUCCESS") {
      localStorage.setItem("token", verifyData.token);
      setAuth(false);
    }
  }, [verifyStatus]);

  useEffect(() => {
    // @ts-ignore
    if (watch("phoneNumber")?.replaceAll("-", "")?.length >= 13) {
      setError("phoneNumber", {});
    }
  }, [watch("phoneNumber")]);

  const handleReSend = () => {
    login({
      phoneNumber: watch("phoneNumber"),
    });
    restart(expiryTimestamp, false);
    setResend(false);
  };

  return (
    <CommonModal open={auth} setOpen={setAuth} canClose={false}>
      <StyledAuthModal>
        <div className="header">
          <div className="d-flex align-items-center gap-2">
            {isVerifying ? (
              <>
                <Icons.confirmationIcon />
                <span>{t(`modal.confirmation`)}</span>
              </>
            ) : (
              <>
                <Icons.registerIcon />
                <span>{t(`modal.register`)}</span>
              </>
            )}
            {/* <Icons.loginIcon /> */}
          </div>
          <IconButton onClick={() => setAuth(false)}>
            <Icons.closeIcon />
          </IconButton>
        </div>
        <p className="my-4">
          {isVerifying ? (
            <p className="text-center">
              {t("modal.send_to_phone").replace(
                "{{phone}}",
                watch("phoneNumber")
              )}
            </p>
          ) : (
            <p className="text-center font-700 color-black">
              {t("modal.enter_phone")}
            </p>
          )}
        </p>
        <form onSubmit={onSubmit} id="login_form">
          {isVerifying ? (
            <>
              <div className="otp-container">
                <OTPInput otp={code} setOtp={setCode} />
              </div>
              <div className="flex-center">
                <a
                  className={resend ? "mt-2" : "resend-inactive mt-2"}
                  onClick={resend ? handleReSend : undefined}
                >
                  {t("modal.re_send")}
                </a>
              </div>
            </>
          ) : (
            <PhoneInput control={control} name="phoneNumber" autofocus={true} />
          )}

          <CommonButton
            title={t("common.continue")}
            className="blue mt-4"
            type="submit"
            form="login_form"
            sx={{
              width: "100%",
              height: "48px !important",
            }}
            disabled={
              loginStatus === "LOADING" || (isVerifying && code.length !== 6)
            }
          />
        </form>

        {isVerifying ? (
          <p className="text-center mt-2">00:{seconds}</p>
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
