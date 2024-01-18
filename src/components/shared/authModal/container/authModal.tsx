import { CommonModal, OTPInput, PhoneInput } from "@/components";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useTimer } from "react-timer-hook";
import {
  ILogin_body,
  IRegister_body,
  IVerify_body,
} from "../context/addModal.types";
import { StyledAuthModal } from "./authModal.styles";
import useGlobalContext from "@/context/useGlobal";

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
        <p className="text-gray my-4">
          {isVerifying ? (
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
            <>{t("modals.login_info")}</>
          )}
        </p>
        <form onSubmit={onSubmit}>
          {isVerifying ? (
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
            <PhoneInput
              control={control}
              // placeholder="+998"
              name="phoneNumber"
              // autoFocus
            />
          )}
          <Button
            // disabled={
            //   loginStatus === "LOADING" || (isVerifying && code.length !== 6)
            // }
            className="continue my-4"
            type="submit"
          >
            {t("modals.continue")}
          </Button>
        </form>

        {isVerifying ? (
          <p className="text-center">00:{seconds}</p>
        ) : (
          <p>
            <Trans
              i18nKey="modals.login_warn"
              components={[
                <Link to={"website-conditions"} target="_blank"></Link>,
              ]}
            />
          </p>
        )}

        <h2>Modal</h2>
      </StyledAuthModal>
    </CommonModal>
  );
};

export default AuthModal;
