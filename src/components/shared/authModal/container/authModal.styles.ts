import styled from "@emotion/styled";

export const StyledAuthModal = styled.div`
  width: 380px;
  background-color: #fff;
  border-radius: 16px;
  padding: 15px 18px;

  .header {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #d9d9d9;
    gap: 10px;

    p {
      font-size: 16px;
      font-weight: 700;
    }

    button {
      width: 32px;
      height: 32px;
    }
  }

  .term_bottom {
    font-size: 14px;
    margin-top: 15px !important;
    display: block;
    a {
      color: #0065ff;
    }
  }

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
    background-color: #0065ff !important;
    color: #fff;
    font-size: 15px;
    text-transform: inherit;
    font-weight: 600;
    border-radius: 12px;

    &:hover {
      background-color: #0065ff !important;
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
      gap: 5px;
    }
  }
`;
