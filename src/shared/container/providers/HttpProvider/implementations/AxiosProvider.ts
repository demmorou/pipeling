/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { IHttpSetup } from '../dtos/ISetup';
import { IHttpProvider } from '../models/IHttpProvider';

export class AxiosProvider implements IHttpProvider {
  private axios: AxiosInstance;

  public setup({ baseURL, headers, params }: IHttpSetup): void {
    this.axios = Axios.create({
      baseURL,
      headers,
      params,
    });
  }

  public async get(
    path: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse> {
    return this.axios.get(path, config);
  }

  public async post(
    path: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse> {
    return this.axios.post(path, data, config);
  }

  public async put(
    path: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse> {
    return this.axios.put(path, data, config);
  }

  public async delete(
    path: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse> {
    return this.axios.delete(path, config);
  }

  public async patch(
    path: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse> {
    return this.axios.patch(path, data, config);
  }
}
