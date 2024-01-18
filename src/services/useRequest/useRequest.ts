import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "@/services/client/client";
import { TSetState } from "@/types/types.common";
import { toast } from "react-hot-toast";
import { ERROR_MESSAGES, REQUEST_STATUS } from "./useRequest.constants";
import {
  // DataType,
  IUseRequestParams,
  TApiRequestMetod,
  TStatuses,
} from "./useRequest.types";

export const useRequest = <TResponse = any, TBody = any, TUpdateBody = any>(
  defaultValue: any = undefined,
  options: IUseRequestParams = {
    isAutoSetInitial: false,
    setToInitialWhenError: false,
    successToast: true,
  }
): [
  {
    get: (url: string, params?: object) => Promise<any>;
    post: (url: string, data: TBody) => Promise<any>;
    put: (url: string, data: TUpdateBody | TBody) => Promise<any>;
    deleteRequest: (url: string, data?: any) => Promise<any>;
  },
  TResponse, // ! DataType<TResponse | undefined>
  TStatuses,
  any,
  {
    setStatus: TSetState<TStatuses>;
    resetRequest: () => void;
  }
] => {
  const { isAutoSetInitial, setToInitialWhenError, successToast } = options;
  const navigate = useNavigate();
  const [data, setData] = useState<TResponse | {}>(defaultValue || {});
  /* ({
    code: 0,
    data: defaultValue || undefined || 0 || {},
    message: 'no error',
  });
 */
  const [status, setStatus] = useState<TStatuses>(REQUEST_STATUS.initial);
  const [error, setError] = useState<any>();
  // const language = localStorage.getItem("i18nextLng") || "uz";

  const get = async (url: string, params?: object) =>
    await sendRequest("get", url, { params });

  const post = async (url: string, data: TBody) =>
    await sendRequest("post", url, data);

  const put = async (url: string, data: TBody | TUpdateBody) =>
    await sendRequest("put", url, data);

  const deleteRequest = async (url: string /* data: any */) =>
    await sendRequest("delete", url);

  const sendRequest = async (
    method: TApiRequestMetod,
    url: string,
    data?: any
  ) => {
    setStatus(REQUEST_STATUS.loading);
    try {
      const res: any = await axios[method](encodeURI(url.trim()), data);
      if (res.status === 13000) {
        navigate("/notFound");
        return;
      }
      if (res.status === 401) {
        navigate("/login");
      }
      setData(res.data);
      setStatus(REQUEST_STATUS.success);

      if (isAutoSetInitial) {
        setTimeout(() => {
          setStatus(REQUEST_STATUS.initial);
        }, 1000);
      }
      if (method !== "get" && successToast) {
        if (res) {
          // toast.success(res?.message);
        }
      }

      return res.data;
    } catch (err: any) {
      setError(err);
      setStatus(REQUEST_STATUS.failed);
      if (err?.message) {
        if (
          ERROR_MESSAGES[localStorage.getItem("i18nextLng") || "uz"][
            err.code || 1
          ]
        ) {
          return toast.error(
            ERROR_MESSAGES[localStorage.getItem("i18nextLng") || "uz"][
              err.code || 1
            ]
          );
        }
        toast.error(err?.message);
      } else {
        toast.error("Error");
      }
      if (setToInitialWhenError) {
        setData(defaultValue);
      }
    }
  };
  const resetRequest = () => {
    setData({});
    setStatus("INITIAL");
    setError(undefined);
  };
  const methods = {
    get,
    post,
    put,
    deleteRequest,
  };
  return [
    methods,
    // @ts-ignore
    data,
    status,
    error,
    {
      setStatus,
      resetRequest,
    },
  ];
};
