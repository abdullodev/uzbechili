import OTPInputReact from "react-otp-input";
import { StyledOTPInput } from "./OTPInput.styled";

interface IOTPInput {
  numInputs?: number;
  setOtp: (otp: string) => void;
  otp: string;
}
const OTPInput = ({ numInputs = 6, setOtp, otp }: IOTPInput) => {
  return (
    <StyledOTPInput>
      <OTPInputReact
        numInputs={numInputs}
        renderSeparator={<span> </span>}
        renderInput={(props) => (
          <input
            {...props}
            className="otp-input"
            type="number"
            autoFocus
            required
          />
        )}
        onChange={setOtp}
        shouldAutoFocus
        value={otp}
      />
    </StyledOTPInput>
  );
};

export default OTPInput;
