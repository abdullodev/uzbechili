import styled from "@emotion/styled";

export const StyledOTPInput = styled.div`
  .otp-input {
    width: 48px !important;
    height: 56px;
    border-radius: 10px;
    background: #f5f4f2;
    border: none;
    outline: none;
    margin: 7px;
    color: var(--neutral-dark-darkest, #1f2024);
    text-align: center;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 125% */
  }
  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
