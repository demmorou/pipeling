/* eslint-disable @typescript-eslint/no-explicit-any */
import { IHeaders } from './IHeaders';

export interface IHttpSetup extends IHeaders {
  baseURL: string;
  params?: any;
}
