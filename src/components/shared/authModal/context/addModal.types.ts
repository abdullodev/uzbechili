export interface IRegister_body {
  phoneNumber: string;
  firstName: string;
  lastName?: string;
}
export interface ILogin_body {
  phoneNumber: string;
}
export interface IVerify_body {
  _id: string;
  otp: string;
}
