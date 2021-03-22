/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosRequestConfig, AxiosResponse } from 'axios';

import { IHttpSetup } from '../dtos/ISetup';

interface IHttpProvider {
  setup(data: IHttpSetup): void;
  get<T = any>(
    path: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>>;
  delete<T = any>(
    path: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>>;
  post<T = any>(
    path: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>>;
  put<T = any>(
    path: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>>;
  patch<T = any>(
    path: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>>;
}

export { IHttpProvider };
