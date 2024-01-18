export interface DataType<T> {
  code: number;
  message: string;
  data: T;
}

export type TableDataType<T> = { data: T[]; total: number };

export type TApiRequestMetod = 'get' | 'post' | 'put' | 'delete';
export type TStatuses = 'INITIAL' | 'SUCCESS' | 'FAILED' | 'LOADING';

export interface IUseRequestParams {
  isAutoSetInitial?: boolean;
  setToInitialWhenError?: boolean;
  successToast?: boolean;
}
