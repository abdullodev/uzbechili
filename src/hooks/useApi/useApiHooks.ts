import { AxiosResponse, Method } from "axios";
import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from "react-query";
import { useTranslation } from "react-i18next";
import { toast } from "react-hot-toast";
import api from "@/services/client/client";
import { pickBy } from "lodash";

const useApi = <Data = any, Error = any>(
  url: string,
  params: object = {},
  options: UseQueryOptions<AxiosResponse<Data>, Error> & { toast?: boolean } = {
    toast: true,
  }
) => {
  return useQuery(
    [url, params],
    async () => {
      try {
        const response = await api.get<Data>(url, { params });
        return response;
        // @ts-ignore
      } catch (error: AxiosResponse<Data>) {
        if (error?.statusCode === 401) {
          localStorage.clear();
          window.location.replace("/login");
          return error;
        }
        if (options.toast) {
          toast.error(error?.message || "server error");
        }
        return {
          data: [],
        };
      }
    },
    // @ts-ignore
    {
      ...options,
    }
  );
};

const useApiMutation = <
  Variables = any,
  Response = {},
  Error extends { message?: string } = {}
>(
  url: string,
  method: Method,
  options: UseMutationOptions<AxiosResponse<Response>, Error, Variables> = {}
) => {
  // const dis = useAppDispatch();
  const { t } = useTranslation();

  return useMutation<AxiosResponse<Response>, Error, Variables>(
    (data) => {
      const response = api({ url, method, data });
      return response;
    },
    {
      onError(error) {
        console.log(error);
        toast.error(error?.message || method + "ed, no response");
      },
      onMutate() {
        // dis(setButtonDisable(true));
      },
      onSuccess() {
        toast.success(t("general.success"));
        // dis(setOpenDrawer(false));
        // dis(reRenderTable(true));
      },
      onSettled() {
        // dis(setButtonDisable(false));
      },
      ...options,
    }
  );
};

const useApiWithId = <
  Variables = {
    id: string;
    body?: any;
  },
  Response = any,
  Error = any
>(
  url: string,
  method: Method,
  options: UseMutationOptions<AxiosResponse<Response>, Error, Variables> = {}
) =>
  useMutation<AxiosResponse<Response>, Error, Variables>(
    ({ id, body }: any) => {
      url = id ? `${url}/${id}` : url;
      const response = api({ url, method, data: pickBy(body, Boolean) });
      return response;
    },
    // @ts-ignore
    { ...options }
  );

export { useApi, useApiMutation, useApiWithId };
