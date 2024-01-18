import styled from "@emotion/styled";

export const StyledAuthModal = styled.div`
  /* width: 90%; */
  width: 400px;
  background-color: aqua;
  height: 600px;
  .change-number {
    color: #17c657;
    cursor: pointer;
    margin-top: 5px;
  }
  .MuiFormControl-root {
    min-width: 100% !important;
  }
  button.continue {
    width: 100%;
    padding: 13px 0;
    background-color: #17c657 !important;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    border-radius: 12px;

    &:hover {
      background-color: #0eaf49 !important;
    }
  }
  .resend-inactive {
    cursor: default;
    opacity: 0.5;
  }
  p {
    font-size: 16px;
    color: #454545;

    a {
      text-decoration: underline;
    }
  }
  form {
    .otp-container {
      display: flex;
      justify-content: center;
    }
  }
`;
