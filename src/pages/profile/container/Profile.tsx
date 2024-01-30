import Icons from "@/assets/svgs";
import { CommonButton, PhoneInput, TextInput } from "@/components";
import { Modal } from "@mui/material";
import { get } from "lodash";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ModalStyle, ProfileStyle } from "./Profile.style";

const Profile = () => {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const { control, setValue } = useForm();

  const auth = JSON.parse(localStorage.getItem("auth") || "{}");

  useEffect(() => {
    if (auth) {
      setValue("phoneNumber", get(auth, "phoneNumber", ""));
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    location.pathname = "";
    navigate("/");
  };

  return (
    <ProfileStyle>
      <div className="user-box">
        <form className="d-flex flex-column gap-2 ">
          <TextInput control={control} name="firstName" label={"Ismi"} />
          <div>
            <PhoneInput
              control={control}
              name="phoneNumber"
              label={"Phone number"}
            />
          </div>
          <CommonButton
            className="blue"
            title="Saqlash"
            sx={{ height: "48px !important" }}
          />
        </form>
      </div>
      <div className="border"></div>
      <div className="info">
        <span>
          Saytni yaxshilash bo'yicha savollaringiz yoki takliflaringiz bormi bu
          haqda “O'ZBECHILI” jamoasiga yozing
        </span>
      </div>

      <div className="d-flex flex-column gap-2 bottom">
        <Link to={"https://t.me/just_islom"} style={{ width: "290px" }}>
          <CommonButton
            startIcon={<Icons.TgIcon />}
            title="Telegram orqali yozish"
            className="white"
            sx={{ width: "290px !important", height: "48px !important" }}
          />
        </Link>

        <CommonButton
          title="Akkauntdan chiqish"
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
          <h3>Rosdan ham chiqmoqchimisiz?</h3>
          <div className="d-flex gap-2">
            <CommonButton
              title="Yo'q"
              className="no"
              onClick={() => setOpen(false)}
            />
            <CommonButton title="Ha" className="yes" onClick={logout} />
          </div>
        </ModalStyle>
      </Modal>
    </ProfileStyle>
  );
};

export default Profile;
