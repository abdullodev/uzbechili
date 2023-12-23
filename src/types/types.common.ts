import { FieldPath, RegisterOptions } from "react-hook-form";
export type TPaging = {
  page: number;
  limit: number;
};
export type TableData<T> = {
  total: number;
  data: T[];
};
export interface IStateT<TVal = string> {
  name?: string;
  _id?: TVal | null;
  value?: TVal | null;
  [key: string]: any;
}
export type TSetState<StateType> = React.Dispatch<
  React.SetStateAction<StateType>
>;
export type TRules<FormNames extends Record<string, any>> = Omit<
  RegisterOptions<FormNames, FieldPath<FormNames>>,
  "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
>;

export interface IProfile {
  firstName: string;
  lastName: string;
  middleName: string;
  birthdate: string;
  gender: string;
  imageId?: any;
  image?: any;
  phoneNumber?: string;
}
export interface IOption<T = string> extends Record<string, any> {
  _id: T;
  name: string;
  trans_key?: string;
}
